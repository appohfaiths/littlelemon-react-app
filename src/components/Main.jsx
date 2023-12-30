import React from 'react'
import './styles.css'
import { HighlightsSection } from './HighlightsSection'
import { TestimonialsSection } from './TestimonialsSection'

export const Main = () => {
  return (
    <main className='main'>
      <HighlightsSection />
      <TestimonialsSection />
    </main>
  )
}