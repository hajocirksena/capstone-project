import React from 'react'
import Form from './Form'
import { MemoryRouter as Router } from 'react-router-dom'

export default {
  title: 'Form',
  component: Form,
}

export const simple = () => {
  return (
    <Router>
      <Form />
    </Router>
  )
}
