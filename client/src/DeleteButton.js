import React from 'react'
import styled from 'styled-components/'

export default function DeleteButton({ id }) {
  function deleteItem() {
    const urlencoded = new URLSearchParams()
    urlencoded.append('_id', id)

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const request = {
      method: 'DELETE',
      headers: headers,
    }

    fetch('http://localhost:8050/items/' + id, request)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }

  return (
    <DeleteButtonStyled
      onClick={() => {
        deleteItem(id)
      }}
    >
      DELETE
    </DeleteButtonStyled>
  )
}

const DeleteButtonStyled = styled.button`
  background: 159, 171, 171;
  font-weight: bold;
  color: red;
  height: 48px;
  text-decoration: none;
  padding: 4px;
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  border: none;
  border-radius: 10px;
  :active {
    background: rgb(211, 245, 243);
  }
`
