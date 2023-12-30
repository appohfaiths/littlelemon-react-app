import React from 'react'
import './styles.css'

export const AboutSection = () => {
  return (
    <section className='about-section'>
      <aside className='about-section-left'>
        <h2 >Little Lemon</h2>
        <h4 className='section-title'>Chicago</h4>
        <p className='lead-text'>Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. Lorem Ipsum dolor sit amet. </p>
      </aside>
      <aside className='about-section-right'>
        <img src="/assets/images/mario-and-adrian.jpg" alt="the owners of little lemon" className='about-section-image-1'/>
        <img src="/assets/images/Mario and Adrian b.jpg" alt="about little lemon" className='about-section-image-2'/>
      </aside>
    </section>
  )
}