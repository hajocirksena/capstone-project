import React from 'react'
import cardContent from './services'
import styled from 'styled-components'

export default function cards() {
  return (
    <>
      <Wrapper>
        {cardContent.map(el => (
          <div key={el.id}>
            <h2>{el.item}</h2>
            <p>{el.description}</p>
            <p>The finder can reach out to you via: {el.mail}.</p>
            <img src={el.image} width="150px" alt={el.item} />
            <div> {el.qr} </div>
          </div>
        ))}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  background: lightgrey;
  border: black;
`
