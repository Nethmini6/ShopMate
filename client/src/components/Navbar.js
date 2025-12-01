import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

export default function Navbar(){
  const { state } = useCart();
  const qty = state.items.reduce((s,i)=> s + i.qty, 0);
  return (
    <nav style={{ padding: 10, borderBottom: '1px solid #ddd' }}>
      <Link to="/">Shop</Link> | <Link to="/cart">Cart ({qty})</Link>
    </nav>
  );
}
