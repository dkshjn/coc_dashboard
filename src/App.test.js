import { render, screen } from '@testing-library/react';
import App from './App';

test('renders COC Dashboard title', () => {
  render(<App />);
  const titleElement = screen.getByText(/COC Dashboard/i);
  expect(titleElement).toBeInTheDocument();
});
