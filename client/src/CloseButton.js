import React from 'react'
import styled from 'styled-components/'
import { Link } from 'react-router-dom'

export default function CloseButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <Link to="/">
        <img src="./images/close.svg" height="30px" alt="close formular" />
      </Link>
    </Button>
  )
}

const Button = styled.button`
  background: transparent;
  color: darkgray;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  box-shadow: 6px 1px 7px rgb(202, 230, 233);
`
