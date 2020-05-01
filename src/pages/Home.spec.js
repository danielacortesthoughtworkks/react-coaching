import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders title', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Developer Roadmaps/i);
  expect(linkElement).toBeInTheDocument();
});