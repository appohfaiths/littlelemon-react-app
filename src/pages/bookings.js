import React, { useReducer } from 'react'
import { BookingForm } from '../components'
import { fetchAPI, submitAPI } from '../utils/api';
import { useNavigate } from "react-router-dom";

export const updateTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

export const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  console.log(response);
  return (response.length !== 0) ? response : availableTimes;
};

function Bookings() {
  // const [date, setDate] = React.useState(new Date().toISOString().split('T')[0]);
  const navigate = useNavigate();

    function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmedbooking");
    }
  }


  const [availableTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes([]))

  return (
    <main className='bookings-page'>
      <BookingForm availableTimes={availableTimes} setAvailableTimes={dispatchTimes} submitForm={submitForm}/>
    </main>
  )
}

export default Bookings