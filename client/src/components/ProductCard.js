import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 10, width: 220 }}>
      <Link to={`/product/${product._id}`}>
        <img src={product.images?.[0] || 'https://via.placeholder.com/200'} alt="" style={{ width: '100%', height: 140, objectFit: 'cover' }} />
        <h4>{product.title}</h4>
      </Link>
      <div>${product.price.toFixed(2)}</div>
    </div>
  );
}
