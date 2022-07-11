const express = require('express');

const router = express.Router();

const { Products } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const newProd = await Products.create({
      name: req.body.body.name,
      price: req.body.body.price,
      img: req.body.body.img,
    });
  } catch (error) {
    console.log(error);
  }
  console.log(req.body, '================');
});

module.exports = router;
