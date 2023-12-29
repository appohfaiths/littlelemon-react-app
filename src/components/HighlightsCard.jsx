import React from 'react'
import './styles.css'

export const HighlightsCard = ({ data }) => {
    const { name, price, description, image } = data
  return (
      <article className='highlight-card'>
          <section>
              <img src={image} alt="" className='highlight-card-image'/>
          </section>
          <section className='highlight-card-info'>
              <div className='highlight-card-top-text'>
                    <h3>{name}</h3>
                    <span>$ {price}</span>
              </div>
              <p className='highlight-card-description'>{description}</p>
              <p className='highlight-card-delivery'>Order a delivery <img src='/assets/icons/delivery.svg' alt='delivery icon'/></p>
          </section>
    </article>
  )
}
