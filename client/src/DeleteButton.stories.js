import React from 'react'
import DeleteButton from './DeleteButton'
import { MemoryRouter as Router } from 'react-router-dom'

export default {
  title: 'DeleteButton',
  component: DeleteButton,
}

export const simple = () => {
  return (
    <Router>
      <DeleteButton />
    </Router>
  )
}
