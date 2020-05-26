import React from 'react'
import styled from 'styled-components/macro'
import trash from './images/trash.png'

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

    fetch('/items/' + id, request)
      .then(response => response.text())
      .then(result => {
        onDelete()
      })
      .catch(error => console.log('error', error))
  }

  return (
    <DeleteButtonStyled
      data-cy="DeleteButton"
      onClick={() => {
        window.confirm('You really want to delete your stuff?') &&
          deleteItem(id)
      }}
    >
      <img src={trash} alt="bin" className="bin" />
    </DeleteButtonStyled>
  )
}

const DeleteButtonStyled = styled.button`
  background: var(--primary);
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
  box-shadow: 3px 1px 3px lightgray;
  :active {
    background: var(--tertiary);
  }
  .bin {
    width: 28px;
    height: 28px;
    display: block;
    margin: auto;
  }
`
