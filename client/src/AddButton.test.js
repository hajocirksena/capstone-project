import React from 'react'
import { render } from '@testing-library/react'
import AddButton from './AddButton'

test('renders AddButton', () => {
  const { getByAltText } = render(<AddButton />)
  const button = getByAltText('add item')
  expect(button).toBeInTheDocument()
})
