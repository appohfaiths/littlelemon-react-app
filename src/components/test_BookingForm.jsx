import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('handleSubmit prevents default form submission', () => {
  render(<BookingForm />);
  
  const form = screen.getByTestId('booking-form');
  const submitButton = screen.getByTestId('submit-button');
  
  fireEvent.submit(form);
  
  expect(submitButton).not.toBeInTheDocument();
});