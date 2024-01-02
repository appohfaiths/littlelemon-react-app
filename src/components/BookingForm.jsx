import React, { useState } from 'react';

export const BookingForm = ({availableTimes, setAvailableTimes, submitForm}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('17:00');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');
  const [formIsValid, setFormIsValid] = useState(false);


   const handleDateChange = (event) => {
    const newDate = event.target.value;
     setSelectedDate(newDate);

    // Dispatch the state change with the new date
    setAvailableTimes({
      type: 'UPDATE_TIMES',
      times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
      date: newDate,
    });
     validateForm();
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
    validateForm();
  };

  const handleGuestsChange = (event) => {
    setNumberOfGuests(parseInt(event.target.value, 10));
    validateForm();
  };

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
    validateForm();
  };

    const validateForm = () => {
    // Add your custom validation logic here
    const isDateValid = selectedDate !== '';
    const isTimeValid = selectedTime !== '';
    const isGuestsValid = numberOfGuests >= 1 && numberOfGuests <= 10;
    const isOccasionValid = selectedOccasion !== '';

    setFormIsValid(isDateValid && isTimeValid && isGuestsValid && isOccasionValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid) {
      submitForm({
        date: selectedDate,
        time: selectedTime,
        guests: numberOfGuests,
        occasion: selectedOccasion,
      });
    }
  };

  return (
    <>
      <h1>Book Now</h1>
    <form className='booking-form' data-testid="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} required/>

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={selectedTime} onChange={handleTimeChange} required>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={numberOfGuests} onChange={handleGuestsChange} required/>

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={selectedOccasion} onChange={handleOccasionChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" data-testid='submit-button' disabled={!formIsValid}/>
    </form>
    </>
  );
};
