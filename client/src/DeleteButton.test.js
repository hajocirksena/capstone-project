import React from 'react'
import { render } from '@testing-library/react'
import DeleteButton from './DeleteButton'

test('colorchange when active', () => {
  const DeleteButtonStyled = render(<Button />)
  expect(DeleteButtonStyled.getByText()).toHaveStyle(
    'background: rgb(211, 245, 243)'
  )
})

// test('that it changes color upon submit', () => {
//         const btn1before = render(<Button styleActivated={false} />)
//         expect(btn1before.getByText(/Make/i)).toHaveStyle('background: var(--septenary)')
//  })
