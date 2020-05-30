import React from 'react'
import Form from './Form'

export default {
  title: 'Form',
  component: Form,
}

export const simple = () => {
  return <Form />
}

export const errors = () => {
  return (
    <>
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
    </>
  )
}
