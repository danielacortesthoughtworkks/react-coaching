import React from 'react';
import { render } from '@testing-library/react';
import Roadmaps from './Roadmaps';

test('renders content', () => {
  const { getByText } = render(<Roadmaps />);
  const linkElement = getByText(/This is the Roadmaps page/i);
  expect(linkElement).toBeInTheDocument();
});