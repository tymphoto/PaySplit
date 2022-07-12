const express = require('express');

const router = express.Router();
const upload = require('../middlewares/multer');
const { Products } = require('../db/models');

router.post('/', upload.single('myFile'), async (req, res) => {
  console.log(req.body, '<<<<<<<<<<<<,,');
  try {
    // const post = await Products.create(
    //   {
    //     name: req.body.body.name,
    //     price: req.body.body.price,
    //     img: req.file.path.replace('public', ''),
    //   },
    // );
    // res.status(202).json({ post });
  } catch (error) {
    console.log(error);
  }
  // console.log(req, '==========');
});

module.exports = router;
