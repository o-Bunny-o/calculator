// __tests__/Calculator.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator component TDD', () => {
  // test: initial render should show 0 on the display
  test('should render the display with the default value "0"', () => {
    render(<Calculator />);
    // check the display element's text using the test id
    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });

  // test: clicking a digit updates the display
  test('should update display when a digit button is clicked', () => {
    render(<Calculator />);
    // click on the number 1 button
    fireEvent.click(screen.getByText("1"));
    // check the display element's text now is "1"
    expect(screen.getByTestId("display")).toHaveTextContent("1");
  });

  // test: calculate arithmetic operation result
  test('should calculate the result of an arithmetic operation when the equal button is clicked', () => {
    render(<Calculator />);
    // simulate clicking 2, +, 3
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("3"));
    // click equals
    fireEvent.click(screen.getByText("="));
    // check the display shows "5"
    expect(screen.getByTestId("display")).toHaveTextContent("5");
  });

  // test: clear display when clear button is clicked
  test('should clear the display when the clear button is clicked', () => {
    render(<Calculator />);
    // simulate entering 1, +, 1
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("1"));
    // click clear button
    fireEvent.click(screen.getByText("C"));
    // check display resets to "0"
    expect(screen.getByTestId("display")).toHaveTextContent("0");
  });

  // test: delete last character when delete button is clicked
  test('should delete the last character when the delete button is clicked', () => {
    render(<Calculator />);
    // simulate entering "12"
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    // click delete button
    fireEvent.click(screen.getByText("DEL"));
    // check display now shows "1"
    expect(screen.getByTestId("display")).toHaveTextContent("1");
  });
});
