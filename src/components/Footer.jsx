import React from 'react'
import './styles.css'

export const Footer = () => {
  return (
      <footer className='footer'>
      <section className='footer-logo-links'>
        <img src="/assets/images/logo_footer.png" alt="little lemon logo" />
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Log In</a></li>
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