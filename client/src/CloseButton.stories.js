import React from 'react'
import CloseButton from './CloseButton'
import { MemoryRouter as Router } from 'react-router-dom'

export default {
  title: 'CloseButton',
  component: CloseButton,
}

export const simple = () => {
  return (
    <Router>
      <CloseButton />
    </Router>
  )
}
