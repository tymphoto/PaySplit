const express = require('express');

const router = express.Router();
const { Products } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
