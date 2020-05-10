import React from 'react'
import styled from 'styled-components/'
import { Link } from 'react-router-dom'

export default function CloseButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <Link to="/">
        <img src="./images/close.svg" alt="close formular" />
      </Link>
    </Button>
  )
}

const Button = styled.button`
  background: transparent;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50px;
  img {
    width: 30px;
    height: auto;
    border-radius: 50px;
    :active {
      background: rgb(211, 245, 243);
    }
  }
`
