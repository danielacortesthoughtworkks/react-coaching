import React from 'react'
import { render } from '@testing-library/react';
import Description from './Description'

describe('<Description /> spec', () => {
it('renders the component', () => {
  const container = render(<Description />)
  expect(container.firstChild).toMatchSnapshot()
 })
});
