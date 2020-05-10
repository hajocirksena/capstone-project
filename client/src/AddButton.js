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
  margin: auto;
  margin-bottom: 1.3vh;
  display: flex;
  border: none;
  border-radius: 50px;
  img {
    width: 50px;
    height: auto;
    padding: 4px;
  }
  :active {
    background: rgb(211, 245, 243);
  }
`
