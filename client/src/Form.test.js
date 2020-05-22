import React from 'react'
import { render } from '@testing-library/react'
import Form from './Form'
import { BrowserRouter as Router } from 'react-router-dom'

test('renders form', () => {
  const { getByText } = render(
    <Router>
      <Form />
    </Router>
  )
  const content = getByText(/Wie heißt dein stuff?/i)
  expect(content).toBeInTheDocument()
})

test('renders form pt 2', () => {
  const { getByPlaceholderText } = render(
    <Router>
      <Form />
    </Router>
  )
  const content = getByPlaceholderText(
    /Beschreibe deinen Artikel. Diese Info wird auch für den Finder sichtbar sein./i
  )
  expect(content).toBeInTheDocument()
})
