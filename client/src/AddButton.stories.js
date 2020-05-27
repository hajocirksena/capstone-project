import React from 'react'
import AddButton from './AddButton'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'AddButton',
  component: AddButton,
  decorators: [withKnobs],
}

export const simple = () => {
  return <AddButton onClick={action('onClick')} />
}

export const withALabel = () => (
  <AddButton onClick={action('onClick')}>
    {text('Label', 'Add Stuff')}
  </AddButton>
)
