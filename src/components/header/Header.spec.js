import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders title', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Developer Roadmaps/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders description', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Community driven roadmaps/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders navbar buttons', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/FAQ/i);
  expect(linkElement).toBeInTheDocument();
});
