import React from 'react'
import '../assets/css/navbar.css'
import Logo from '../assets/images/logo.png'
export default function Navbar() {

  return (
    <>
      <div className="Navbar-container">
        <div className="Navbar-section logo ">
          <a href="/">
            <img className='Logo-img' src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="Navbar-section Links">
          <a href="/About">About Us</a>
          <a href="/Days">Days</a>
          <a href="/Register-Intrest">Register Intrest</a>
        </div>
        <div className="Navbar-section Dead-space">

        </div>
      </div>
    </>
  )

}
