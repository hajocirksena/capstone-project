import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function CloseButton() {
  return (
    <Button>
      <Link to="/">
        <img src="./images/close.svg" alt="close" />
      </Link>
    </Button>
  )
}

const Button = styled.button`
  background: var(--secondary);
  width: 30px;
  height: 30px;
  border: none;
  img {
    width: 30px;
    height: auto;
    border-radius: 50px;
    cursor: default;
    :active {
      background: var(--primary);
    }
  }
`
