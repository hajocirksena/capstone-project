import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <>
      <HeaderFrame>
        <Name>this is my stuff</Name>
      </HeaderFrame>
    </>
  )
}

const HeaderFrame = styled.span`
  display: flex;
  height: 8vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom left, white, #bfdad9);
  margin-right: 6vw;
  border-bottom-right-radius: 40px;
  box-shadow: 8px 3px 15px lightgray;
`
const Name = styled.h2`
  font-family: OpenSans-Regular;
  color: rgb(38, 38, 38);
  text-decoration: underline;
  font-size: 2em;
  margin: auto;
  text-shadow: -1px 0 lightgrey, 0 1px lightgrey;
`
