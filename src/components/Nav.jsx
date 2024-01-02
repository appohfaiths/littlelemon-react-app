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
          <img src='/assets/images/Logo.svg' alt='Little Lemon Logo' className='top-nav-logo' onClick={handleClick}/>
          <ul className='top-nav-links section-title'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/bookings">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Log In</Link></li>
      </ul>
      <img src='/assets/icons/Hamburger_Menu.svg' alt='Menu button' className='top-nav-menu-button'/>
    </nav>
  )
}