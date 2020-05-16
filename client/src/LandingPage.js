import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function LandingPage({ id }) {
  const [item, setItem] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(id => {
    fetch('http://localhost:8050/items/' + id)
      .then(response => response.json())
      .then(data => setItem(data.reverse()))
      .then(() => setLoading(false))
  }, [])

  // function individualCall() {
  //   const urlencoded = new URLSearchParams()
  //   urlencoded.append('_id', id)

  //   const headers = new Headers()
  //   headers.append('Content-Type', 'application/json')

  //   const request = {
  //     method: 'GET',
  //     headers: headers,
  //   }

  //   fetch('http://localhost:8050/items/' + id, request)
  //     .then(response => response.text())
  //     .then(data => setItem(data.reverse()))
  //     .then(() => setLoading(false))
  //     .catch(error => console.log('error', error))
  // }

  return (
    <Wrapper>
      {loading ? (
        <img
          src="./images/Loading.gif"
          alt="loading"
          className="loading-image"
        />
      ) : (
        item.map(el => (
          <CardStyled key={el._id} image={`url(${el.image})`}>
            <TitleStyled>Hey! Du hast was gefunden?!?!</TitleStyled>
            <TextStyled>{el.description}</TextStyled>
            <TextSmallStyled>
              Du kannst die gute Seele sein und jemanden glücklich machen.Nehme
              per Mail Kontakt zu dem Eigentümer auf und bringe ihm seinen stuff
              zurück!
              {el.mail}
            </TextSmallStyled>
          </CardStyled>
        ))
      )}
    </Wrapper>
  )
}

const TextSmallStyled = styled.p`
  font-size: 0.8em;
  padding: 4px;
  color: rgb(38, 38, 38);
  margin: 4vh 20vw 2vh 0;
`
const TextStyled = styled.p`
  font-size: 1.3em;
  color: rgb(38, 38, 38);
  padding: 6px;
  margin-top: 1.5vh;
  font-family: sans-serif;
  text-shadow: -1px 0 lightgrey, 0 1px lightgrey;
`
const TitleStyled = styled.h2`
  font-family: Poiret One;
  color: rgb(38, 38, 38);
  font-size: 2.5em;
  text-align: left;
  margin: 16vh 0 0 0;
  text-shadow: -1px 0 lightgrey, 0 1px lightgrey;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 30px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  .loading-image {
    display: block;
    margin: auto;
  }
`

const CardStyled = styled.div`
  position: relative;
  top: 5%;
  padding: 10px;
  margin: 0 5vw;
  background-image: linear-gradient(
      to bottom left,
      rgba(245, 246, 252, 0.78),
      rgb(202, 230, 233)
    ),
    ${props => props.image};
  background-size: cover;
  width: 90vw;
  height: 85vh;
  border-radius: 4px;
  box-shadow: 10px 5px 15px darkgray;
  scroll-snap-align: center;
  overflow: scroll;
`
