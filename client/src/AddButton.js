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
  margin-bottom: 3vh;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;
  box-shadow: 6px 1px 7px grey;
  background-size: cover;
`
