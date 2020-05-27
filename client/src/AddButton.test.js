import React from 'react'
import { render } from '@testing-library/react'
import AddButton from './AddButton'
import { BrowserRouter as Router } from 'react-router-dom'

test('render & click AddButton', () => {
  const callback = jest.fn()
  const { getByAltText } = render(
    <Router>
      <AddButton onClick={callback} />
    </Router>
  )
  const button = getByAltText('add item')
  expect(button).toBeInTheDocument()
  expect(callback.calls.length).toBe(1)
})
