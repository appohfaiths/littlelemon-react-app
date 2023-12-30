import React from 'react'
import './styles.css'

export const TestimonialsCard = ({ data }) => {
  const { rating, image, name, bio, review } = data;

  return (
    <aside className='testimonial-card'>
      <div className='testimonial-rating'>
        <p className='lead-text'>Rating</p>
        <span>{rating}</span>
      </div>
      <div className='testimonial-profile'>
        <img src={image} alt={name} className='testimonial-image'/>
        <p>{name}</p>
        <p>{bio}</p>
      </div>
      <div>
        <p className='lead-text'>Review</p>
        <p>{review}</p>
      </div>
    </aside>
  )
}