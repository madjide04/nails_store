import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className='header'>
        <div className="logo">GOLDENHOURPRESS</div>
        <div className="buttons">
            <div className="contact-us">Contact Us</div>
            <div className="cart">
                <img src="/ing/solar_cart-5-bold.png" alt="" />
                <h1>Shopping Cart</h1>
            </div>
        </div>
    </header>
  )
}

export default Header