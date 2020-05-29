import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import QRCode from 'qrcode.react'
import { saveAs } from 'file-saver'
import DeleteButton from './DeleteButton'
import load from './images/loading.gif'
import { loadItems } from './services'

export default function Items() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadItems()
      .then(data => setItems(data.reverse()))
      .then(() => setLoading(false))
  }, [])

  return (
    <WrapperStyled>
      {loading ? (
        <img src={load} alt="loading" className="loading-image" />
      ) : (
        items.map(item => (
          <div key={item._id}>
            <CardStyled image={`url(${item.image})`}>
              <TitleStyled>{item.name}</TitleStyled>

              <TextStyled>{item.description}</TextStyled>
              <TextSmallStyled>
                Sollte dein stuff gefunden werden bist du für den Finder per
                Mail an {item.mail} zu erreichen.
              </TextSmallStyled>
              <QRStyled>
                <QRCode
                  name="QRCode"
                  id="QrCode"
                  alt="QRCode"
                  value={'/' + item._id}
                />
                <SaveQrButtonStyled onClick={downloadCode}>
                  save qr
                </SaveQrButtonStyled>
              </QRStyled>
              <DeleteButton id={item._id} onDelete={deleteCard} />
              {/* // THIS IS A PLACEHOLDER-LINK BECAUSE ITS IMPOSSIBLE TO SCAN QRCODES IN THE BROWSER // */}
              <QRFoundStyled>
                <a href={'/items/' + item._id}>?</a>
              </QRFoundStyled>
            </CardStyled>
          </div>
        ))
      )}
    </WrapperStyled>
  )
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
  border-radius: 8px;
  border: 1px solid darkgray;
  position: absolute;
  bottom: 8px;
  margin: auto;
  box-shadow: 3px 1px 3px lightgray;
  :active {
    background: var(--tertiary);
  }
`
const QRStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 16px;
`

const TextSmallStyled = styled.p`
  margin: 12px 20px 0 0;
`
const TextStyled = styled.p`
  height: 144px;
  overflow: scroll;
  font-size: 1.2em;
  margin-top: 12px;
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
  margin: auto 16px;
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
