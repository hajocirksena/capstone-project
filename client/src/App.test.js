import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import AddButton from './AddButton'

test('renders header', () => {
  const { getByText } = render(<App />)
  const header = getByText(/stuff/i)
  expect(header).toBeInTheDocument()
})

test('renders AddButton', () => {
  const { getByAltText } = render(<AddButton />)
  const button = getByAltText('add item')
  expect(button).toBeInTheDocument()
})
