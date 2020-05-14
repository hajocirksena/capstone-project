import React from 'react'
import EditButton from './EditButton'
import { MemoryRouter as Router } from 'react-router-dom'

export default {
  title: 'EditButton',
  component: EditButton,
}

export const simple = () => {
  return (
    <Router>
      <EditButton />
    </Router>
  )
}
