require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { User } = require('./db/models');
const Bcrypt = require('./utils/bcrypt');

const app = express();

const menuRouter = require('./routers/menuRouter');
const orderRouter = require('./routers/orderRouter');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/', menuRouter);
app.use('/order', orderRouter);

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

app.get('/auth', async (req, res) => {
  console.log(req);
  try {
    const result = await User.findByPk(req.session.userId);
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
    const result = await User.create({
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
    const result = await User.findOne({ where: { email } });
    if (await Bcrypt.compare(password, result.password)) {
      req.session.userName = result.name;
      req.session.userId = result.id;
      return res.json(result);
    }
    throw Error(result);
  } catch (error) {
    return res.json(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
