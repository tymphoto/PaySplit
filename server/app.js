require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { Users } = require('./db/models');
const Bcrypt = require('./utils/bcrypt');
const checkSession = require('./middlewares/checkSession');
const menuRouter = require('./routers/menuRouter');
const orderRouter = require('./routers/orderRouter');
const checkRouter = require('./routers/checkRouter');
const prodCreateRouter = require('./routers/prodCreate');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, 'public')));

const sessionConfig = {
  name: 'cook',
  secret: process.env.SECRET || 'thisisnotsecure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));
app.use(cookieParser());
app.use(checkSession);

app.get('/auth', async (req, res) => {
  try {
    const result = await Users.findByPk(req.session.userId);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('cook');
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.post('/register', async (req, res) => {
  try {
    const {
      email, password, name,
    } = req.body;
    const result = await Users.create({
      email, password: await Bcrypt.hash(password), name,
    });
    if (result.id) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(req.body);
    const result = await Users.findOne({ where: { email } });
    if (await Bcrypt.compare(password, result.password)) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      // console.log(result);
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.use('/category', menuRouter);
app.use('/order', orderRouter);
app.use('/checkCreate', checkRouter);
app.use('/prodCreate', prodCreateRouter);

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
