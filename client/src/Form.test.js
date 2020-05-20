import React from 'react'
import { render } from '@testing-library/react'
import Form from './Form'

test('renders placeholder text', () => {
  const { getByPlaceholderText } = render(<Form />)
  const element = getByPlaceholderText(/Wie heißt dein stuff?/i)
  expect(element).toBeInTheDocument()
})
