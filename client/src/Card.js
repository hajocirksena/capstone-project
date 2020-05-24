import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import QRCode from 'qrcode.react'
import { saveAs } from 'file-saver'
import DeleteButton from './DeleteButton'

export default function Card() {
  const [items, setItems] = useState([])
  const [itemData, setItemData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/items')
      .then(response => response.json())
      .then(data => setItems(data.reverse()))
      .then(items => setItemData(items))
      .then(() => setLoading(false))
  }, [itemData])

  function deleteCard() {
    fetch('/items').then(response =>
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

              <TextStyled>{el.description}</TextStyled>
              <TextSmallStyled>
                Sollte dein stuff gefunden werden bist du für den Finder per
                Mail an {el.mail} zu erreichen.
              </TextSmallStyled>
              <QRStyled>
                <QRCode
                  name="QRCode"
                  id="QrCode"
                  alt="QRCode"
                  value={'http://localhost:3000/' + el._id}
                />
                <SaveQrButtonStyled onClick={downloadCode}>
                  save qr
                </SaveQrButtonStyled>
              </QRStyled>
              <DeleteButton id={el._id} onDelete={deleteCard} />
              {/* THIS IS A PLACEHOLDER-LINK BECAUSE ITS IMPOSSIBLE TO SCAN QRCODES IN THE BROWSER */}
              <QRFoundStyled>
                <a href={'http://localhost:3000/' + el._id}>?</a>
              </QRFoundStyled>
            </CardStyled>
          </div>
        ))
      )}
    </WrapperStyled>
  )
}

/* THIS IS QUICK STYLING FOR THE PLACEHOLDER LINK */
const QRFoundStyled = styled.button`
  font-size: 1.2rem;
  width: 20px;
  display: flex;
  justify-content: center;
  padding-bottom: 4px;
  background: var(--primary);
  border-radius: 10px;
  border: 1px solid darkgray;
  position: absolute;
  bottom: 2%;
  margin: auto;
  left: 2%;
  box-shadow: 3px 1px 3px lightgray;
  :active {
    background: var(--secondary);
  }
`

const SaveQrButtonStyled = styled.button`
  font-size: 1.2rem;
  width: 112px;
  padding-bottom: 4px;
  background: var(--primary);
  border-radius: 10px;
  border: 1px solid darkgray;
  position: absolute;
  bottom: 2%;
  margin: auto;
  box-shadow: 3px 1px 3px lightgray;
  :active {
    background: var(--secondary);
  }
`
const QRStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 16px;
`

const TextSmallStyled = styled.p`
  margin: 12px 16vw 0 0;
`
const TextStyled = styled.p`
  height: 144px;
  overflow: scroll;
  font-size: 1.2em;
  margin-top: 1vh;
`
const TitleStyled = styled.h1`
  font-size: 2.5em;
  margin: 20px 0 0 4px;
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
      var(--primary)
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
