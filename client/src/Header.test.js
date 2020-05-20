import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('renders header', () => {
  const { getByText } = render(<Header />)
  const element = getByText(/stuff/i)
  expect(element).toBeInTheDocument()
})
