import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders FAQ link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/FAQ/i);
  expect(linkElement).toBeInTheDocument();
});
