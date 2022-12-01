import React from 'react';
import { Link } from 'react-router-dom';
import NavbarStyle from '../Navbar/Navbar.module.css';

function Navbar() {
  return (
    <div className={NavbarStyle.container}>
        <Link className={NavbarStyle.navLink} to="/">Home</Link>
        <Link className={NavbarStyle.navLink} to="/Marketplace">Marketplace</Link>
        <Link className={NavbarStyle.navLink} to="/Upload">Upload</Link>
        <Link className={NavbarStyle.navLink} to="/Shopping-Basket">Shopping-Basket</Link>
    </div>
  )
};

export default Navbar;