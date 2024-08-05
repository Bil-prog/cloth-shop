//import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <Link to='/'onClick={()=>setMenu('shop')} className={menu === "shop" ? "active": ""} style={{textDecoration: 'none'}}>Shop</Link>
            <Link to='/men' onClick={()=>setMenu('men')} className={menu === "men" ? "active": ""} style={{textDecoration: 'none'}}>Men</Link>
            <Link to='/women' onClick={()=>setMenu('women')} className={menu === "women" ? "active": ""} style={{textDecoration: 'none'}}>Women</Link>
            <Link onClick={()=>setMenu('kids')} className={menu === "kids" ? "active": ""} style={{textDecoration: 'none'}}>Kids</Link>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar