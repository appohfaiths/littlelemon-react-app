import React from 'react'

export const CtaButton = ({ text, handleClick }) => {
  return (
      <button className='cta-button' onClick={handleClick}>{text}</button>
  )
}
