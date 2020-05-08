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

export const errors = () => {
  return (
    <Router>
      <label for="item">Wie heißt dein stuff? </label>
      <input
        name="item"
        id="item"
        type="text"
        placeholder="Z.B.: Schlüssel, Handy..."
        ref={{ required: true, maxLength: 150 }}
      />
      {errors.item && <p>insert name!</p>}
      <button type="submit">Submit</button>
    </Router>
  )
}
