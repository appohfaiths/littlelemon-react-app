import React, { useReducer } from 'react'
import { BookingForm } from '../components'

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

function Bookings() {
    const initializeTimes = () => {
      const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      return initialTimes;
    };

  const [availableTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes())

  return (
    <>
      <BookingForm availableTimes={availableTimes} setAvailableTimes={dispatchTimes}/>
    </>
  )
}

export default Bookings