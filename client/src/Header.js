import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <>
      <HeaderFrame>
        <img src="./images/logo.png" alt="logo" />
        <Name>this is my stuff</Name>
      </HeaderFrame>
    </>
  )
}

const HeaderFrame = styled.span`
  display: flex;
  height: 8vh;
  background: linear-gradient(to bottom left, white, var(--primary));
  margin-right: 6vw;
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
