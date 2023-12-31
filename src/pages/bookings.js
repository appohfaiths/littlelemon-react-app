import React from 'react'
import { BookingForm } from '../components'

function Bookings({ availableTimes, setAvailableTimes}) {
  return (
    <>
      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
    </>
  )
}

export default Bookings