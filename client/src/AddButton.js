import React from 'react'
import styled from 'styled-components/'
import { Link } from 'react-router-dom'

export default function Button({ onClick }) {
  return (
    <AddButton onClick={onClick}>
      <Link to="/formular">
        <img src="./images/plus.svg" height="48px" />
      </Link>
    </AddButton>
  )
}

const AddButton = styled.button`
  background: #95c1c1;
  color: darkgray;
  margin: auto;
  margin-bottom: 15px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: 0 6px 8px #0004;
`
