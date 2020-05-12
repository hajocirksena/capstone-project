import React, { useState } from 'react'
import styled from 'styled-components/'

export default function Button(id) {
  const [deleteUpdate, setDeleteUpdate] = useState('')

  function deleteItem() {
    const urlencoded = new URLSearchParams()
    urlencoded.append('_id', id)

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const request = {
      method: 'DELETE',
      headers: headers,
    }

    fetch('http://localhost:8050/items/', request)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }

  return (
    <DeleteButton
      onClick={() => deleteItem(deleteUpdate, id)}
      onChange={handleDeleteUpdate}
    >
      <>DELETE</>
    </DeleteButton>
  )
  function handleDeleteUpdate(event) {
    setDeleteUpdate(event.target.value)
  }
}

const DeleteButton = styled.button`
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
