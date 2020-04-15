import React from 'react';
import { render } from '@testing-library/react';
import Description from './Description';


test('renders description', () => {
  const { getByText } = render(<Description description="Community driven roadmaps" />);
  const linkElement = getByText(/Community driven roadmaps/i);
  expect(linkElement).toBeInTheDocument();
});
