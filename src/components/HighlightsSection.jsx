import React from 'react'
import './styles.css'
import { HighlightsCard } from './HighlightsCard'
import { hightlights } from '../assets/json/highlights'
import { CtaButton } from './CtaButton'

export const HighlightsSection = () => {
  return (
      <section className='highlights-section'>
          <p className='highlights-top'>
              <h2>This weeks specials!</h2>
              <CtaButton text='online menu' />
        </p>
        <div className='highlights'>
          {hightlights.map((highlight, index) => {
            return <HighlightsCard key={index} data={highlight} />
          })}
        </div>
      </section>
  )
}