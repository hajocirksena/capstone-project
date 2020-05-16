import React from 'react'
import ReactDOM from 'react-dom'
import AddButton from './AddButton'

test('renders  AddButton', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <AddButton>
      <img src="./images/plus.svg" alt="add card" />
    </AddButton>,
    container
  )
  expect(container.textContent).toBe(
    <img src="./images/plus.svg" alt="add card" />
  )
})

// test('renders Submit Button', () => {
//   const container = document.createElement('div')
//   ReactDOM.render(<SubmitButton>Los gehts!</SubmitButton>, container)
//   expect(container.textContent).toBe('Los gehts!')
// })

// test('renders Submit Button', () => {
//   const container = document.createElement('div')
//   ReactDOM.render(<SubmitButton>Submit</SubmitButton>, container)
//   expect(container.textContent).toBe('Submit')
// })
