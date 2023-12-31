import React, { useState, useReducer, useEffect } from 'react';

  const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

export const BookingForm = ({availableTimes, setAvailableTimes}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('17:00');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');
  const [timesState, dispatchTimes] = useReducer(availableTimesReducer, availableTimes);

    const updateTimes = (newDate) => {
    const newTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    dispatchTimes({ type: 'UPDATE_TIMES', times: newTimes });
    };

    const initializeTimes = () => {
    const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    dispatchTimes({ type: 'UPDATE_TIMES', times: initialTimes });
    };

    useEffect(() => {
    initializeTimes();
  }, []);



  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    updateTimes(newDate);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setNumberOfGuests(parseInt(event.target.value, 10));
  };

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className='booking-form' onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={selectedTime} onChange={handleTimeChange}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={numberOfGuests} onChange={handleGuestsChange} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={selectedOccasion} onChange={handleOccasionChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};
