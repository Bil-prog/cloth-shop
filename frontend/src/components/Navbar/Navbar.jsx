//import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { useState } from 'react'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setMenu('shop')} className={menu === "shop" ? "active": ""}>Shop</li>
            <li onClick={()=>setMenu('men')} className={menu === "men" ? "active": ""}>Men</li>
            <li onClick={()=>setMenu('women')} className={menu === "women" ? "active": ""}>Women</li>
            <li onClick={()=>setMenu('kids')} className={menu === "kids" ? "active": ""}>Kids</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar