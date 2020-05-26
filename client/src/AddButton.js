import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import plus from './images/plus.svg'

export default function AddButton() {
  return (
    <AddButtonStyled data-cy="AddButton">
      <Link to="/form">
        <img src={plus} alt="add item" />
      </Link>
    </AddButtonStyled>
  )
}

const AddButtonStyled = styled.button`
  background: transparent;
  margin: auto;
  margin-bottom: 12px;
  display: flex;
  border: none;
  border-radius: 50px;
  img {
    width: 50px;
    height: auto;
    padding: 4px;
    cursor: default;
  }
  :active {
    background: rgb(211, 245, 243);
  }
`
