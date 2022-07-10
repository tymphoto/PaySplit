const express = require('express');

const router = express.Router();
const { Checks, Orders } = require('../db/models');

router.post('/', async (req, res) => {
  console.log(req.body, '====================');
  // console.log('123');
  try {
    const newCheck = await Checks.create({ user_id: req.body.body });
    console.log(newCheck.id);
    // const newOrder = await Orders.create({ check_id: newCheck.id });

    res.json({ newCheck });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
