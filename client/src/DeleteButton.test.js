import React from 'react'
import { render } from '@testing-library/react'
import DeleteButton from './DeleteButton'

test('colorchange when active', () => {
  const DeleteButtonStyled = render(<Button />)
  expect(DeleteButtonStyled.getByText()).toHaveStyle(
    'background: rgb(211, 245, 243)'
  )
})
