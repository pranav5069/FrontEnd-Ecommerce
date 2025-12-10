import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import './Header.css';


function Header(){
    return(
        <Router>
            <nav className="navbar">
                <div className="navbar-container">
                    <h2 id="navbar-brand">New Market</h2>
                    <ul className="navbar-links">
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<Navigate to="/products" replace/>}></Route>
                    <Route path="/products" element={<Products/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default Header;