import React from 'react'
import styled from 'styled-components'

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
  justify-content: flex-start;
  align-items: flex-start;
  background: linear-gradient(to bottom left, white, #bfdad9);
  margin-right: 6vw;
  border-bottom-right-radius: 40px;
  box-shadow: 3px 1px 3px lightgray;
  img {
    display: flex;
    height: 40px;
    width: auto;
    margin: 6px 0 0 15px;
  }
`
const Name = styled.h2`
  font-family: OpenSans-Regular;
  color: rgb(38, 38, 38);
  text-decoration: underline;
  font-size: 2em;
  margin: 8px 0 0 35px;
  text-shadow: -1px 0 lightgrey, 0 1px lightgrey;
`
