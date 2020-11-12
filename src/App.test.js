import { render, screen } from '@testing-library/react';
import App from './App';

test('renders monsters rolodex', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/search monsters/i);
  expect(linkElement).toBeInTheDocument();
});
