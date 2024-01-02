import React from 'react'
import './styles.css'
import { CtaButton } from './CtaButton'
import { useNavigate } from "react-router-dom";

export const Hero = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/bookings');
  }
  return (
    <section aria-label="Hero Section" className='hero'>
      <section className='hero-left'>
        <h1 className='hero-text' aria-label="Restaurant Name">Little Lemon</h1>
        <h2 className='hero-text' aria-label="Location">Chicago</h2>
        <p className='lead-text hero-text' aria-label="Description">
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a <span>modern twist</span>
              </p>
        <CtaButton text='request a table' aria-label="Request a Table Button" handleClick={handleClick}/>
      </section>
          <section className='hero-right' aria-label="Hero Image Section">
                <img src='/assets/images/restaurantfood.jpg' alt='hero' className='hero-image'/>
      </section>
    </section>
  )
}