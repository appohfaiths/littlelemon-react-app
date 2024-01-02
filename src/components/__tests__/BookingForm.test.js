import { render, screen, fireEvent } from "@testing-library/react";
import { BookingForm } from "../BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={['17:00']} setAvailableTimes={''}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

describe('Booking Form', () => {
    test('handleSubmit prevents default form submission', () => {
        render(<BookingForm availableTimes={['17:00']} setAvailableTimes={''} />);

        const form = screen.getByTestId("booking-form");
        const event = {
            preventDefault: jest.fn(),
        };
        fireEvent.submit(form, event);
    })
})

describe('Booking Form Submit Button Disabled', () => {
    test('should be disabled if all fields are empty', () => {
        render(<BookingForm availableTimes={['17:00']} setAvailableTimes={''} />);
        const submitButton = screen.getByTestId("submit-button");
        expect(submitButton).toBeDisabled();
    })
})

describe('Booking Form Submit Button Enabled', () => {
  test('should be enabled if all fields are filled', () => {
    const mockSubmitForm = jest.fn();

    render(
      <BookingForm
        availableTimes={['17:00']}
        setAvailableTimes={() => {}}
        submitForm={mockSubmitForm}
      />
    );

    // Fill in all the required fields
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2022-12-01' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeEnabled();

    //simulate form submission and check if the submit function is called
    fireEvent.submit(submitButton);
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2022-12-01',
      time: '17:00',
      guests: 2,
      occasion: 'Birthday',
    });
  });
});

describe('BookingForm inputs', () => {
  test('renders BookingForm component', () => {
    render(<BookingForm availableTimes={['17:00']} setAvailableTimes={() => {}} submitForm={() => {}} />);

    // You can add more specific tests based on your form structure
    expect(screen.getByTestId('booking-form')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  test('applies correct attributes to date input', () => {
    render(<BookingForm availableTimes={['17:00']} setAvailableTimes={() => {}} submitForm={() => {}} />);
    const dateInput = screen.getByLabelText('Choose date');

    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');
  });

  test('applies correct attributes to time select', () => {
    render(<BookingForm availableTimes={['17:00']} setAvailableTimes={() => {}} submitForm={() => {}} />);
    const timeSelect = screen.getByLabelText('Choose time');

    expect(timeSelect).toHaveAttribute('required');
  });

  test('applies correct attributes to guests input', () => {
    render(<BookingForm availableTimes={['17:00']} setAvailableTimes={() => {}} submitForm={() => {}} />);
    const guestsInput = screen.getByLabelText('Number of guests');

    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('applies correct attributes to occasion select', () => {
    render(<BookingForm availableTimes={['17:00']} setAvailableTimes={() => {}} submitForm={() => {}} />);
    const occasionSelect = screen.getByLabelText('Occasion');

    expect(occasionSelect).toHaveAttribute('required');
  });

});
