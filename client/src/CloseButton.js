import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import close from './images/close.svg'

export default function CloseButton() {
  return (
    <Button>
      <Link to="/">
        <img src={close} alt="close" />
      </Link>
    </Button>
  )
}

const Button = styled.button`
  background: var(--secondary);
  margin-right: -10px;
  width: 44px;
  height: 30px;
  border: none;
  img {
    width: 30px;
    border-radius: 50px;
    cursor: default;
    :active {
      background: var(--primary);
    }
  }
`
