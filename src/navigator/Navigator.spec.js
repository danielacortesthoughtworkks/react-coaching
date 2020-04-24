import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App  from '../app'
import FAQ  from '../pages/Faq'

test('home page is rendering correctly', () => {
  const history = createMemoryHistory()
  const route = '/'
  history.push(route)
  const { getByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(getByTestId('home-test')).toHaveTextContent('Developer Roadmaps', { exact: false })
})

test('faq is rendering correctly', () => {
  const history = createMemoryHistory()
  const route = '/faq'
  history.push(route)
  const { getByTestId } = render(
    <Router history={history}>
      <FAQ />
    </Router>
  )
  expect(getByTestId('faq-test')).toHaveTextContent('This is the FAQ page', { exact: false })
  
})