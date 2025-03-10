The error you're seeing happens because there are multiple elements in the DOM that contain the same text value. In your case, there are multiple elements that contain the text `2` and `0`, both in the display area and as button labels.

When you use `getByText` in your test, it tries to find a single matching element, but it finds multiple elements. To solve this, you can do a few things depending on your situation:

### 1. Use `getAllByText` or `queryAllByText`
If you want to handle multiple matching elements, you can use `getAllByText` or `queryAllByText`, which will return all matching elements.

For example:
```javascript
const buttons = screen.getAllByText("2"); // This will return all elements with text '2'
expect(buttons[0]).toBeInTheDocument(); // You can pick the first one if needed
```

However, this isn't always the best solution if you're expecting to target a specific element. Instead, you may want to try the following solutions.

### 2. Use More Specific Queries
Instead of querying by text alone, it's a good practice to query by a more specific selector, such as using `getByRole` or `getByTestId`. This way, you ensure that you're targeting the right element.

For example, for the display (which might be a div):
```javascript
const display = screen.getByRole('status'); // Assuming your display has a role of "status"
expect(display).toHaveTextContent("2");
```

For buttons, you can use `getByRole` with a specific name or label:
```javascript
const button2 = screen.getByRole('button', { name: /2/i });
expect(button2).toBeInTheDocument();
```

### 3. Use `getByText` with a more specific parent or container
If the button and display elements are close to each other and you're sure one is the display, you could find the display by its parent or container. This avoids confusion between the button and the display. 

For example, if you can target the parent element of the display or the button with a unique `data-testid`, you can do something like:

```javascript
const display = screen.getByTestId('calculator-display'); // Add `data-testid="calculator-display"` to the display element
expect(display).toHaveTextContent('2');
```

### 4. Ensure your component resets the state correctly
Your error also suggests that multiple instances of the same element (`0`, `2`) are conflicting during state transitions (like clicking `C` or `=`). Make sure your component correctly updates the display value and doesn't leave stale elements around.

### Example of the test with more specific queries:
```javascript
test('should calculate the result of an arithmetic operation when the equal button is clicked', () => {
  render(<Calculator />);
  
  fireEvent.click(screen.getByText("2"));
  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("3"));
  fireEvent.click(screen.getByText("="));
  
  const display = screen.getByRole('status'); // or use data-testid
  expect(display).toHaveTextContent("5"); // Assuming 2 + 3 = 5
});
```

By using more specific selectors and ensuring you're querying the right elements, this should resolve the multiple elements error you're encountering.
