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
  width: 0;
  height: 0;
  border: none;
  img {
    width: 30px;
    height: auto;
  }
`
