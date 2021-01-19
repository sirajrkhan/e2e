import { render, screen } from '@testing-library/react';
import App from './App';

test('renders working', () => {
  render(<App />);
  const  t1 = screen.getByText(/Working/i);
  expect(t1).toBeInTheDocument();
});

test('renders Bismillah', () => {
  render (<App />);
  const  linkElement = screen.getByText(/Bismillah/i);
  expect(linkElement).toBeInTheDocument();
});
