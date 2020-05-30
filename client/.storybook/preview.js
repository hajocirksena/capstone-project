import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import GlobalStyle from '../src/GlobalStyle'
import { MemoryRouter as Router } from 'react-router-dom'

addDecorator(storyFn => (
  <Router>
    <GlobalStyle />
    {storyFn()}
  </Router>
))

addParameters({
  viewport: {
    defaultViewport: 'iphone6',
  },
})
