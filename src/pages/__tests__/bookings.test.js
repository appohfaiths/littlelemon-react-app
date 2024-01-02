// import { render } from "@testing-library/react";
import { updateTimes, initializeTimes, updateTimesReducer } from "../bookings";
import { fetchAPI } from "../../utils/api";

jest.mock('../../utils/api', () => ({
  ...jest.requireActual('../../utils/api'),
  fetchAPI: jest.fn(),
}));

describe('updateTimes', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return availableTimes if response is empty', async () => {
    const date = '2024-01-02';
    const availableTimes = ['17:00', '17:30', '18:00'];
    const emptyResponse = [];

    // Mock the fetchAPI function to return an empty response
    fetchAPI.mockReturnValueOnce(emptyResponse);

    const result = updateTimes(availableTimes, date);

    expect(result).toEqual(availableTimes);
    expect(fetchAPI).toHaveBeenCalledWith(new Date(date));
  });

  it('should return response if it is not empty', async () => {
    const date = '2024-01-02';
    const availableTimes = ['17:00', '17:30', '18:00'];
    const nonEmptyResponse = ['18:30', '19:00', '19:30'];

    // Mock the fetchAPI function to return a non-empty response
    fetchAPI.mockReturnValueOnce(nonEmptyResponse);

    const result = updateTimes(availableTimes, date);

    expect(result).toEqual(nonEmptyResponse);
    expect(fetchAPI).toHaveBeenCalledWith(new Date(date));
  });
});

describe('initializeTimes', () => {
  it('should return an array with initialAvailableTimes and additional times from fetchAPI', () => {
    const initialAvailableTimes = ['09:00', '09:30', '10:00'];
    const additionalTimes = ['10:30', '11:00', '11:30'];

    // Mock the fetchAPI function to return additional times
    fetchAPI.mockReturnValueOnce(additionalTimes);

    const result = initializeTimes(initialAvailableTimes);

    expect(result).toEqual([...initialAvailableTimes, ...additionalTimes]);
    // Ensure fetchAPI is called with the current date
    expect(fetchAPI).toHaveBeenCalledWith(new Date());
  });
});

describe('updateTimesReducer', () => {
  it('should update times when action type is UPDATE_TIMES', () => {
    const initialState = ['09:00', '09:30', '10:00'];
    const action = {
      type: 'UPDATE_TIMES',
      times: ['10:30', '11:00', '11:30'],
    };

    const result = updateTimesReducer(initialState, action);

    expect(result).toEqual(action.times);
  });

  it('should return the current state for unknown action types', () => {
    const initialState = ['09:00', '09:30', '10:00'];
    const action = {
      type: 'UNKNOWN_ACTION',
      // other potential properties depending on your action structure
    };

    const result = updateTimesReducer(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('should return the initial state when no state is provided', () => {
    const action = {
      type: 'UPDATE_TIMES',
      times: ['10:30', '11:00', '11:30'],
    };

    const result = updateTimesReducer(undefined, action);

    expect(result).toEqual(action.times);
  });
});