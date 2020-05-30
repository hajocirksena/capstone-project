import React from 'react'
import styled from 'styled-components/macro'
import logo from './images/logo.png'

export default function Header() {
  return (
    <HeaderFrame>
      <img src={logo} alt="" />
      <Name>this is my stuff</Name>
    </HeaderFrame>
  )
}

const HeaderFrame = styled.span`
  display: flex;
  height: 52px;
  background: linear-gradient(to bottom left, white, var(--primary));
  margin-right: 20px;
  border-bottom-right-radius: 40px;
  box-shadow: 3px 1px 3px lightgray;
  img {
    height: 40px;
    margin: 6px 0 0 15px;
  }
`
const Name = styled.h1`
  text-decoration: underline;
  margin: 8px 0 0 35px;
`
