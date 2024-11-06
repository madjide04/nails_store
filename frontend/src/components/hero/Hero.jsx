import React from 'react'
import "./hero.css"

const Header = () => {
  return (
    <div className='hero'>
        <header className='header'>
        <div className="logo">GOLDENHOURPRESS</div>
        <div className="buttons">
            <div className="contact-us">Contact Us</div>
            <div className="cart">
                <img src="/img/solar_cart-5-bold.png" alt="" />
                <h1>Shopping Cart</h1>
            </div>
        </div>
        </header>
        <main className='main'>
            <h1>Press On Nails</h1>
            <p>Put Love in your Nails!</p>
            <div className="button">SHOP NOW</div>
        </main>
    </div>
  )
}

export default Header