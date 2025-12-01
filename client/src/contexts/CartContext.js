import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      // try to merge if product exists
      const existing = state.items.find(i => i.productId === action.payload.productId);
      if (existing) {
        return { items: state.items.map(i => i.productId === existing.productId ? { ...i, qty: i.qty + action.payload.qty } : i) };
      }
      return { items: [...state.items, action.payload] };
    case 'REMOVE':
      return { items: state.items.filter(i => i.productId !== action.payload) };
    case 'UPDATE_QTY':
      return { items: state.items.map(i => i.productId === action.payload.productId ? { ...i, qty: action.payload.qty } : i) };
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
