import React from 'react'
import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }
  return (
      <main className='confirmed-booking'>
          <h1>Booking Confirmed</h1>
          <p>Please provide your name and booking number at the reception upon arrival</p>
      <p>Little Lemon!</p>
      <button onClick={handleClick} className='back-to-home'>Back to Home</button>
    </main>
  )
}

export default ConfirmedBooking