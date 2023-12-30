import React from 'react'
import './styles.css'
import { TestimonialsCard } from './TestimonialsCard'
import { testimonials } from '../assets/json/testimonials'

export const TestimonialsSection = () => {
  return (
      <section className='testimonial-section'>
          <p className='testimonial-top'>
              <h2>Testimonials</h2>
        </p>
        <div className='testimonials'>
          {testimonials.map((testimonial, index) => {
            return <TestimonialsCard key={index} data={testimonial} />
          })}
        </div>
      </section>
  )
}