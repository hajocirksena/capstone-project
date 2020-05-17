import React from 'react'
import styled from 'styled-components/'

export default function DeleteButton({ id, onDelete }) {
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
      .then(result => {
        console.log(result)
        onDelete()
      })
      .catch(error => console.log('error', error))
  }

  return (
    <DeleteButtonStyled
      onClick={() => {
        deleteItem(id)
      }}
    >
      <img src="./images/Trash.png" alt="bin" className="bin" />
    </DeleteButtonStyled>
  )
}

const DeleteButtonStyled = styled.button`
  background: 159, 171, 171;
  color: red;
  height: 48px;
  width: 48px;
  text-decoration: none;
  padding: 4px;
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  border: 1px solid darkgray;
  border-radius: 10px;
  :active {
    background: rgb(200, 227, 226);
  }
  .bin {
    width: 28px;
    height: 28px;
    display: block;
    margin: auto;
  }
`
