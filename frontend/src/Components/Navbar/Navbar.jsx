import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  // Function to handle menu item click
  const handleMenuClick = (menuItem) => {
    console.log(`${menuItem} clicked`);
    // Add any additional logic here (e.g., analytics, state updates, etc.)
  };

  return (
    <div className='navbar'>
      <div className='nav_logo'>
        <img src={logo} alt="ROVER FASHION Logo" />
        <p>ROVER FASHION</p>
      </div>
      <ul className='nav-menu'>
        {/* Use Link and onClick together */}
        <li>
          <Link to="/" onClick={() => handleMenuClick('Shop')}><span style={{color:"white"}}>Shop</span></Link>
        </li>
        <li>
          <Link to="/mens" onClick={() => handleMenuClick('Men')}>Men</Link>
        </li>
        <li>
          <Link to="/women" onClick={() => handleMenuClick('Women')}>Women</Link>
        </li>
        <li>
          <Link to="/kids" onClick={() => handleMenuClick('Kids')}>Kids</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link to="/Login" onClick={() => handleMenuClick('Login')}>LogIn</Link>
        </button>
        <img src={cart_icon} alt="Cart Icon" />
        <div className='nav-cart-mount'>0</div>  {/* Cart amount display */}
      </div>
    </div>
  );
};

export default Navbar;

