const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Order = require('../models/Order');

// place order
router.post('/', auth, async (req, res) => {
  // req.body: { items: [{product, qty, price}], address }
  const { items, address } = req.body;
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  const order = new Order({ user: req.user.id, items, total, address });
  await order.save();
  res.json(order);
});

// get my orders
router.get('/me', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('items.product');
  res.json(orders);
});

module.exports = router;
