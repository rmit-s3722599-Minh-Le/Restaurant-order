import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders App Component', () => {
  render(<App />);
  const textElement = screen.getByText(/Vite \+ React/i);
  expect(textElement).toBeInTheDocument();
});