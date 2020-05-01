import React from 'react';
import { render } from '@testing-library/react';
import Faq from './Faq';

test('renders content', () => {
  const { getByText } = render(<Faq />);
  const linkElement = getByText(/This is the faq page/i);
  expect(linkElement).toBeInTheDocument();
});