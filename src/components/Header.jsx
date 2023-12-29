import React from 'react'
import './styles.css'

export const Header = () => {
  return (
    <header className='header'>
      <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className='lead-text'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a <span>modern twist</span>
        </p>
      </section>
      <section></section>
    </header>
  )
}