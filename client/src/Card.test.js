import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

test('renders Card', () => {
  const { getByAltText } = render(<Card />)
  const content = getByAltText('loading')
  expect(content).toBeInTheDocument()
})
