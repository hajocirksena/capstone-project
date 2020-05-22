import React from 'react'
import { render } from '@testing-library/react'
import LandingPage from './LandingPage'

test('renders LandingPage', () => {
  const { getByAltText } = render(<LandingPage />)
  const content = getByAltText(/loading/)
  expect(content).toBeInTheDocument()
})
