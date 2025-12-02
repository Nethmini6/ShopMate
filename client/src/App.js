import React, {useState} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar />

      <Routes>

        {/* DEFAULT ROUTE — If logged in → Home, else → Login */}
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} 
        />

        <Route 
          path="/login" 
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} 
        />

        <Route path="/signup" element={<SignupPage />} />

        {/* PROTECTED ROUTES */}
        <Route 
          path="/home" 
          element={isLoggedIn ? <Home /> : <Navigate to="/home" />} 
        />

        <Route 
          path="/product" 
          element={isLoggedIn ? <ProductPage /> : <Navigate to="/login" />} 
        />

        <Route 
          path="/cart" 
          element={isLoggedIn ? <CartPage /> : <Navigate to="/login" />} 
        />

      </Routes>
    </>
  );
}

export default App;
