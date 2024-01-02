import React from 'react'
import './styles.css'

export const HighlightsCard = ({ data }) => {
    const { name, price, description, image } = data
  return (
      <article className='highlight-card' aria-label={`${name} Highlight Card`}>
          <section>
              <img src={image} alt="" className='highlight-card-image' aria-label={`Highlight Image of ${name}`}/>
          </section>
          <section className='highlight-card-info'>
              <div className='highlight-card-top-text'>
                    <h3 aria-label='Highlight Name'>{name}</h3>
                    <span aria-label='Highlight Price'>$ {price}</span>
              </div>
              <p className='highlight-card-description' aria-label='Highlight Description'>{description}</p>
              <p className='highlight-card-delivery' aria-label='Order Delivery button'>Order a delivery <img src='/assets/icons/delivery.svg' alt='delivery icon'/></p>
          </section>
    </article>
  )
}
