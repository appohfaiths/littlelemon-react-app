import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export const Footer = () => {
  return (
      <footer className='footer'>
      <section className='footer-logo-links'>
        <img src="/assets/images/logo_footer.png" alt="little lemon logo" />
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/bookings">Reservations</Link></li>
                <li><Link to="/">Order Online</Link></li>
                <li><Link to="/">Log In</Link></li>
              </ul>
          </section>
          <section>
              <ul>
                <li><a href="/">Phone</a></li>
                <li><a href="/">Address</a></li>
                <li><a href="/">Email</a></li>
              </ul>
          </section>
          <section>
              <ul>
                <li><a href="/">Facebook</a></li>
                <li><a href="/">Twitter</a></li>
                <li><a href="/">Instagram</a></li>
              </ul>
          </section>
    </footer>
  )
}