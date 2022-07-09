const express = require('express');

const router = express.Router();
const { Orders, Products, Checks } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.findOne({
      where: { check_id: id },
      include: {
        model: Checks,
      },
    });
    console.log(JSON.parse(JSON.stringify(order), '============================='));
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Orders.destroy({ where: { id } });
    res.json({ order });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
