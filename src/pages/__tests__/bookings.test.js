// import { render } from "@testing-library/react";
import { updateTimes, initializeTimes } from "../bookings";

describe("initializeTimes", () => {
    test('function returns an array of time', () => {
        const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        expect(initializeTimes()).toEqual(initialTimes);
    })
});

describe("updateTimes", () => {
    // test('should update times in state', () => {
    //     const initialState = ['10:00', '11:00', '12:00'];
    //     const action = { type: 'UPDATE_TIMES', times: ['13:00', '14:00', '15:00'] };
    //     const expectedState = ['13:00', '14:00', '15:00'];

    //     const newState = updateTimes(initialState, action);

    //     expect(newState).toEqual(expectedState);
    // });

    test('should return the same value provided in the state', () => {
        const initialState = ['10:00', '11:00', '12:00'];
        const action = { type: 'UPDATE_TIMES', times: ['10:00', '11:00', '12:00'] };

        const newState = updateTimes(initialState, action);

        expect(newState).toEqual(initialState);
    });
});