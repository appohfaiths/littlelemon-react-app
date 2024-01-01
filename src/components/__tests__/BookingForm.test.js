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