import React from 'react';
import { render } from '@testing-library/react';
import Sponsors from './Sponsors';

test('renders content', () => {
  const { getByText } = render(<Sponsors />);
  const linkElement = getByText(/This is the Sponsors page/i);
  expect(linkElement).toBeInTheDocument();
});