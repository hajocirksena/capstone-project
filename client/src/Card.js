import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { QRCode } from 'react-qr-svg'
import DeleteButton from './DeleteButton'

export default function Card() {
  const [items, setItems] = useState([])
  const [itemData, setItemData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8050/items')
      .then(response => response.json())
      .then(data => setItems(data.reverse()))
      .then(items => setItemData(items))
      .then(() => setLoading(false))
  }, [itemData])

  function handleClick() {
    fetch('http://localhost:8050/items').then(response =>
      response.json().then(data => setItems(data.reverse()))
    )
  }

  return (
    <Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        items.map(el => (
          <div key={el._id}>
            <CardStyled image={`url(${el.image})`}>
              <TitleStyled>{el.name}</TitleStyled>
              <TextStyled>{el.description}</TextStyled>
              <TextSmallStyled>
                Sollte dein stuff gefunden werden bist du für den Finder per
                Mail über {el.mail} zu erreichen.
              </TextSmallStyled>
              <QRStyled>
                <QRCode name="QR-Code" value={JSON.stringify(el._id)} />
              </QRStyled>
              <DeleteButton id={el._id} onDelete={handleClick} />
            </CardStyled>
          </div>
        ))
      )}
    </Wrapper>
  )
}

const QRStyled = styled.div`
  position: absolute;
  bottom: 5%;
  left: 38%;
  width: 80px;
  height: 80px;
`

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
  font-family: Roboto;
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
  height: 75vh;
  border-radius: 4px;
  box-shadow: 10px 5px 15px darkgray;
  scroll-snap-align: center;
  overflow: scroll;
`
