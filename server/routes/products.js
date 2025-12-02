const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// get all
router.get('/', async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

// get one
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ msg: 'Not found' });
  res.json(product);
});

// create (for admin use; you might protect in real app)
router.post('/', async (req, res) => {
  const newP = new Product(req.body);
  const p = await newP.save();
  res.json(p);
});

module.exports = router;
