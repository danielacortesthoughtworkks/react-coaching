import React from 'react'
import { render } from '@testing-library/react';
import Navbar from './Navbar'

describe('<Navbar /> spec', () => {
it('renders the component', () => {
  const container = render(<Navbar />)
  expect(container.firstChild).toMatchSnapshot()
 })
})