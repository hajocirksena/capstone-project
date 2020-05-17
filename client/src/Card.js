import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import QRCode from 'qrcode.react'
import { saveAs } from 'file-saver'
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

  function deleteCard() {
    fetch('http://localhost:8050/items').then(response =>
      response.json().then(data => setItems(data.reverse()))
    )
  }

  function downloadCode() {
    var svg = document.getElementById('QrCode')
    svg.toBlob(function(stuff) {
      saveAs(stuff, 'QrCode.png')
    })
  }

  return (
    <WrapperStyled>
      {loading ? (
        <img
          src="./images/Loading.gif"
          alt="loading"
          className="loading-image"
        />
      ) : (
        items.map(el => (
          <div key={el._id}>
            <CardStyled image={`url(${el.image})`}>
              <TitleStyled>{el.name}</TitleStyled>

              <TextStyled>
                {el.description}
                {/* PLACEHOLDER LINK TO SCANNED QRCODE CAUSE YOU CANT SCAN INSIDE THE BROWSER */}
                {/* <a max-height="4px;" href={'http://localhost:3000/' + el._id}>
                  Landingpage
                </a> */}
              </TextStyled>
              <TextSmallStyled>
                Sollte dein stuff gefunden werden bist du für den Finder per
                Mail über {el.mail} zu erreichen.
              </TextSmallStyled>
              <QRStyled>
                <QRCode
                  name="QRCode"
                  id="QrCode"
                  value={'http://localhost:3000/' + el._id}
                />
              </QRStyled>
              <SaveQrButtonStyled onClick={downloadCode}>
                save qr
              </SaveQrButtonStyled>
              <DeleteButton id={el._id} onDelete={deleteCard} />
            </CardStyled>
          </div>
        ))
      )}
    </WrapperStyled>
  )
}
const SaveQrButtonStyled = styled.button`
  font-size: 1.2rem;
  width: 112px;
  padding-bottom: 4px;
  background: rgb(200, 227, 226);
  border-radius: 10px;
  border: 1px solid darkgray;
  position: absolute;
  bottom: 2%;
  margin: auto;
  left: 32%;
  box-shadow: 3px 1px 3px lightgray;
  :active {
    background: lightgrey;
  }
`
const QRStyled = styled.div`
  position: absolute;
  top: 65%;
  left: 30%;
  width: 80px;
  height: 80px;
`

const TextSmallStyled = styled.p`
  font-size: 1em;
  padding: 4px;
  color: rgb(38, 38, 38);
  margin: 12px 16vw 0 0;
`
const TextStyled = styled.p`
  height: 33%;
  overflow: scroll;
  font-size: 1.2em;
  color: rgb(38, 38, 38);
  padding: 8px;
  margin-top: 1.5vh;
  font-family: sans-serif;
  text-shadow: -1px 0 lightgrey, 0 1px lightgrey;
`
const TitleStyled = styled.h2`
  font-family: Poiret One;
  color: rgb(38, 38, 38);
  font-size: 2.5em;
  text-align: left;
  margin: 2vh 0 2vh 4px;
  text-shadow: -1px 0 lightgrey, 0 1px lightgrey;
`

const WrapperStyled = styled.div`
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
      rgba(245, 246, 252, 0.8),
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
