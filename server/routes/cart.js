const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// calculate total from posted cart
router.post('/calculate', async (req, res) => {
  // req.body.items = [{ productId, qty }]
  const items = req.body.items || [];
  let total = 0;
  for (const it of items) {
    const p = await Product.findById(it.productId).lean();
    if (!p) continue;
    total += p.price * it.qty;
  }
  res.json({ total });
});

module.exports = router;
