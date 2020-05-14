import React from 'react'
import styled from 'styled-components/'
import { Link } from 'react-router-dom'

export default function EditButton({ id }) {
  return (
    <Link to={'/edit/' + id}>
      <EditButtonStyled>
        <>EDIT</>
      </EditButtonStyled>
    </Link>
  )
}

const EditButtonStyled = styled.button`
  background: 159, 171, 171;
  font-weight: bold;
  color: red;
  height: 48px;
  text-decoration: none;
  padding: 4px;
  position: absolute;
  left: 12px;
  bottom: 12px;
  display: flex;
  border: none;
  border-radius: 10px;
  :active {
    background: rgb(211, 245, 243);
  }
`
