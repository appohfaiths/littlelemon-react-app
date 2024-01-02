import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export const Nav = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }
  return (
      <nav className='top-nav'>
          <img src='/assets/images/Logo.svg' alt='Little Lemon Logo' className='top-nav-logo' onClick={handleClick} aria-label='Little Lemon Logo'/>
          <ul className='top-nav-links section-title' aria-label='Navigation Links'>
                <li><Link to="/" aria-label='Home'>Home</Link></li>
                <li><Link to="/" aria-label='About'>About</Link></li>
                <li><Link to="/" aria-label='Menu'>Menu</Link></li>
                <li><Link to="/bookings" aria-label='Reservations'>Reservations</Link></li>
                <li><Link to="/" aria-label='Order Online'>Order Online</Link></li>
                <li><Link to="/" aria-label='Log in'>Log In</Link></li>
      </ul>
      <img src='/assets/icons/Hamburger_Menu.svg' alt='Menu button' className='top-nav-menu-button' aria-label='Mobile Menu'/>
    </nav>
  )
}