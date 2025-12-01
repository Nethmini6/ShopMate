import React, { useEffect, useState } from 'react';
import API from '../services/api';
import ProductCard from '../components/ProductCard';

export default function Home(){
  const [products, setProducts] = useState([]);
  useEffect(()=> {
    API.get('/products').then(res => setProducts(res.data)).catch(err=>console.error(err));
  }, []);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 240px)', gap: 20 }}>
      {products.map(p => <ProductCard key={p._id} product={p} />)}
    </div>
  );
}
