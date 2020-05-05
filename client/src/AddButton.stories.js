import React from 'react'
import AddButton from './AddButton'
import { MemoryRouter as Router } from 'react-router-dom'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'AddButton',
  component: AddButton,
  decorators: [withKnobs],
}

export const simple = () => {
  return (
    <Router>
      <AddButton onClick={action('onClick')} />
    </Router>
  )
}

export const withALabel = () => (
  <Router>
    <AddButton onClick={action('onClick')}>
      {text('Label', 'Add Stuff')}
    </AddButton>
  </Router>
)
