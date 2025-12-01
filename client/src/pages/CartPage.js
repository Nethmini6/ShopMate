import React from 'react';
import { useCart } from '../contexts/CartContext';
import API from '../services/api';

export default function CartPage(){
  const { state, dispatch } = useCart();
  const total = state.items.reduce((s,i)=> s + i.price * i.qty, 0);

  const placeOrder = async () => {
    // in a real app you need auth token and address; here we just show order flow
    try {
      const response = await API.post('/orders', { items: state.items.map(i => ({ product: i.productId, qty: i.qty, price: i.price })), address: 'Sample address' });
      alert('Order placed: ' + response.data._id);
      dispatch({ type: 'CLEAR' });
    } catch (err) {
      alert('Place order failed — you need to be logged in for demo');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {state.items.length===0 ? <div>Cart empty</div> : (
        <>
          <ul>
            {state.items.map(i => (
              <li key={i.productId}>
                {i.title} — ${i.price} × {i.qty}
                <button onClick={()=> dispatch({ type: 'REMOVE', payload: i.productId })}>Remove</button>
              </li>
            ))}
          </ul>
          <div>Total: ${total.toFixed(2)}</div>
          <button onClick={placeOrder}>Place Order</button>
        </>
      )}
    </div>
  );
}
