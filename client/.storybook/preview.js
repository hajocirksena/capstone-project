import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import GlobalStyle from '../src/GlobalStyle'

addDecorator(storyFn => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
))

addParameters({
  viewport: {
    defaultViewport: 'iphone6',
  },
})
