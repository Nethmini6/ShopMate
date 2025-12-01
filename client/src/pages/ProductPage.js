import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';
import { useCart } from '../contexts/CartContext';

export default function ProductPage(){
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  const { dispatch } = useCart();
  useEffect(()=> {
    API.get(`/products/${id}`).then(r => setProd(r.data)).catch(()=>{});
  }, [id]);

  if(!prod) return <div>Loading...</div>;
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <img src={prod.images?.[0] || 'https://via.placeholder.com/300'} alt="" style={{ width: 300 }} />
      <div>
        <h2>{prod.title}</h2>
        <p>{prod.description}</p>
        <div>${prod.price.toFixed(2)}</div>
        <button onClick={()=> dispatch({ type: 'ADD', payload: { productId: prod._id, title: prod.title, price: prod.price, qty: 1 }})}>Add to Cart</button>
      </div>
    </div>
  );
}
