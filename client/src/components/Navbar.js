import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Navbar() {
  return (
    <header className="navbar">
      <h2>SHOPMATE</h2>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/ProductPage">Product</Link>
        <Link to="/LoginPage">Login</Link>
        <Link to="/CartPage">Cart</Link>
      </nav>
    </header>
  );
}

export default Navbar;
