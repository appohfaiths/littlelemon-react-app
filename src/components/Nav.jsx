import React from 'react'
import './styles.css'

export const Nav = () => {
  return (
      <nav className='top-nav'>
          <img src='/assets/images/Logo.svg' alt='Little Lemon Logo' className='top-nav-logo'/>
          <ul className='top-nav-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Log In</a></li>
      </ul>
      <img src='/assets/images/Hamburger_Menu.svg' alt='Menu button' className='top-nav-menu-button'/>
    </nav>
  )
}