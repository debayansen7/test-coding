import { render, screen } from '@testing-library/react';
import App from './App';

it('renders App', () => {
  render(<App />);
  const labelText = screen.getByText("Click to view Record Labels");
  expect(labelText).toBeInTheDocument();
});
