const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  images: [String], // store image URLs or paths
  countInStock: { type: Number, default: 0 },
  category: String
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
