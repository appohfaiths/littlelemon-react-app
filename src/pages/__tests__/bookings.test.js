// import { render } from "@testing-library/react";
import { updateTimes, initializeTimes, updateTimesReducer } from "../bookings";

describe("updateTimes", () => {
  it("should return updated times if response is not empty", () => {
    // Arrange
    const availableTimes = ["10:00", "11:00", "12:00"];
    const date = "2022-01-01";
    const response = ["13:00", "14:00", "15:00"];
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(response),
    });

    // Act
    const result = updateTimes(availableTimes, date);

    // Assert
    expect(result).toEqual(response);

    // Clean up
    global.fetch.mockRestore();
  });

  it("should return original times if response is empty", () => {
    // Arrange
    const availableTimes = ["10:00", "11:00", "12:00"];
    const date = "2022-01-01";
    const response = [];
    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(response),
    });

    // Act
    const result = updateTimes(availableTimes, date);

    // Assert
    expect(result).toEqual(availableTimes);

    // Clean up
    global.fetch.mockRestore();
  });
});