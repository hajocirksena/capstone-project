import React from 'react'
import { render } from '@testing-library/react'
import CloseButton from './CloseButton'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders CloseButton', () => {
  const { getByAltText } = render(
    <Router>
      <CloseButton />
    </Router>
  )
  const button = getByAltText('close')
  expect(button).toBeInTheDocument()
})
