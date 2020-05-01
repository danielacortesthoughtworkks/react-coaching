import React from 'react';
import { render } from '@testing-library/react';
import Guides from './Guides';

test('renders content', () => {
  const { getByText } = render(<Guides />);
  const linkElement = getByText(/This is the Guides page/i);
  expect(linkElement).toBeInTheDocument();
});