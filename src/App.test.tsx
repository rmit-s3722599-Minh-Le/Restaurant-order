import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('should render Order component', () => {
    expect(screen.getByText('Pokemon Cafe')).toBeTruthy();
  })

  it('should render Receipt component', () => {
    expect(screen.getByTestId('receipt-stack')).toBeTruthy();
  })
})
