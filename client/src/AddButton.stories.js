import React from 'react'
import AddButton from './AddButton'
import { MemoryRouter as Router } from 'react-router-dom'

export default {
  title: 'AddButton',
  component: AddButton,
}

export const simple = () => {
  return (
    <Router>
      <AddButton />
    </Router>
  )
}
