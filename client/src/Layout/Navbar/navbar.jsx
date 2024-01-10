import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
  return (
    <div className='navbar_container'>
        <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="" />
        <div className='switch'>
        <ul className='switch_ul'>
            <li><NavLink to={"/home"}>Home</NavLink></li>
            <li><NavLink to={"/blog"}>Blog</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/pages"}>Pages</NavLink></li>
            <li><NavLink to={"/shop"}>Shop</NavLink></li>
        </ul>
        </div>

        <div className='buy'>
          <button className='buy_btn'>Buy Now</button>
        </div>
    </div>
  )
}

export default Navbar