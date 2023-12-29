import React from 'react'
import './styles.css'
import { CtaButton } from './CtaButton'

export const Hero = () => {
  return (
    <section className='hero'>
      <section className='hero-left'>
        <h1 className='hero-text'>Little Lemon</h1>
        <h2 className='hero-text'>Chicago</h2>
        <p className='lead-text hero-text'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a <span>modern twist</span>
              </p>
        <CtaButton text='request a table' />
      </section>
          <section className='hero-right'>
                <img src='/assets/images/restaurantfood.jpg' alt='hero' className='hero-image'/>
      </section>
    </section>
  )
}