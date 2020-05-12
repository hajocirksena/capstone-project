import React from 'react'
import styled from 'styled-components/'

export default function Button() {
  function editItem(onClick) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const request = {
      method: 'PATCH',
      headers: headers,
    }

    fetch('http://localhost:8050/items/', request)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
  }

  return (
    <EditButton onClick={editItem}>
      <>EDIT</>
    </EditButton>
  )
}

const EditButton = styled.button`
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
