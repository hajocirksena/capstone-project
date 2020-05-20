import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function LandingPage() {
  const url = new URL(document.URL)
  const id = url.pathname.slice(1)

  const [item, setItem] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/items/' + id)
      .then(response => response.json())
      .then(data => setItem(data))
      .then(() => setLoading(false))
      .catch(error => console.log(error))
  }, [id])

  return (
    <Wrapper>
      {loading ? (
        <img
          src="./images/Loading.gif"
          alt="loading"
          className="loading-image"
        />
      ) : (
        <CardStyled key={item._id} image={`url(${item.image})`}>
          <TitleStyled>Willkommen bei this is my stuff</TitleStyled>
          <TextStyled>{item.name} gefunden?</TextStyled>
          <TextStyled>Hier ein paar Worte vom Eigentümer:</TextStyled>
          <TextStyled>
            <p className="italic">"{item.description}"</p>
          </TextStyled>
          <TextStyled>
            Jetzt ist es an Dir jemanden glücklich zu machen. Du bist nur einen
            Tab auf die Mailadresse vom Besitzer entfernt...
          </TextStyled>
          <TextStyled>
            <a className="bold" href={'mailto:' + item.mail}>
              {item.mail}
            </a>
          </TextStyled>
        </CardStyled>
      )}
    </Wrapper>
  )
}

const TextStyled = styled.p`
  font-size: 1.3em;
  color: rgb(38, 38, 38);
  padding: 8px;
  margin: 4px;
  margin-top: 1.5vh;
  font-family: sans-serif;
  .italic {
    font-style: italic;
  }
  .bold {
    cursor: default;
    font-weight: 700;
    font-size: 1.5em;
    color: rgb(38, 38, 38);
    display: flex;
    justify-content: center;
    :active {
      opacity: 50%;
    }
  }
`
const TitleStyled = styled.h2`
  font-family: Poiret One;
  color: rgb(38, 38, 38);
  font-size: 2.5em;
  text-align: center;
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
  height: 83vh;
  border-radius: 4px;
  box-shadow: 10px 5px 15px darkgray;
  scroll-snap-align: center;
  overflow: scroll;
`
