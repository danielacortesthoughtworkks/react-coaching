
import React from 'react'
import { render } from '@testing-library/react';
import Title from './Title'

describe('<Title /> spec', () => {
it('renders the component', () => {
  const container = render(<Title />)
  expect(container.firstChild).toMatchSnapshot()
 })
});