import React from 'react'
import { render } from '@testing-library/react'
import DeleteButton from './DeleteButton'

test('renders deleteButton', () => {
  const { getByAltText } = render(<DeleteButton />)
  const button = getByAltText('bin')
  expect(button).toBeInTheDocument()
  // expect(DeleteButtonStyled.getByText()).toHaveStyle(
  //   'background: rgb(211, 245, 243)'
})
