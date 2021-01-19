import { render, screen } from '@testing-library/react';
import App from './App';

test('renders working', () => {
  render(<App />);
  const linkElement = screen.getByText(/Working/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Bismillah', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bismillah/i);
  expect(linkElement).toBeInTheDocument();
});
