import React from 'react'
import Card from './Card'
import { MemoryRouter as Router } from 'react-router-dom'

export default {
  title: 'Card',
  component: Card,
}

export const simple = () => {
  return (
    <Router>
      <Card />
    </Router>
  )
}
