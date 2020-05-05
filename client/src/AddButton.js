import React from 'react'
import styled from 'styled-components/'
import { Link } from 'react-router-dom'

export default function Button({ onClick }) {
  return (
    <AddButton onClick={onClick}>
      <Link to="/form">
        <img src="./images/plus.svg" alt="add card" />
      </Link>
    </AddButton>
  )
}

const AddButton = styled.button`
  background: transparent;
  color: darkgray;
  margin: auto;
  display: flex;
  border: none;
`
