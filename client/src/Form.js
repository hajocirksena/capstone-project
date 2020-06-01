import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CloseButton from './CloseButton'
import ImageUpload from './ImageUpload'
import { QRCode } from 'react-qr-svg'
import { Link } from 'react-router-dom'

export default function Form() {
  const [itemData, setItemData] = useState({
    name: '',
    description: '',
    mail: '',
    image: '',
  })

  return (
    <CardStyled>
      <FormStyled data-cy="form">
        <CloseButtonStyled>
          <CloseButton />
        </CloseButtonStyled>
        <LabelStyledName for="name">Wie heißt dein stuff?</LabelStyledName>
        <input
          name="name"
          id="name"
          type="text"
          value={itemData.name}
          onChange={handleChange}
          placeholder="Z.B.: Schlüssel, Handy..."
          minLength="2"
          maxLength="15"
          required
        />

        <LabelStyled for="description">Beschreibe deinen stuff:</LabelStyled>
        <DescriptionInput
          name="description"
          id="description"
          type="text"
          value={itemData.description}
          onChange={handleChange}
          placeholder="Beschreibe deinen Artikel. Diese Info wird auch für den Finder sichtbar sein."
          required
          maxLength="200"
        />
        <LabelStyled for="mail">E-Mail:</LabelStyled>
        <input
          name="mail"
          id="mail"
          type="text"
          value={itemData.mail}
          onChange={handleChange}
          placeholder="Kontaktadresse für den Finder"
          required
        />

        <ImgSection>
          <ImageUpload
            name="image"
            id="image"
            type="file"
            value={itemData.image}
            setImageUrl={setImageUrl}
          />

          <QRCodeStyled>
            <QRCodeLabel>Dein Code:</QRCodeLabel>
            <QRCode name="QR-Code" value={JSON.stringify(itemData)} />
          </QRCodeStyled>
        </ImgSection>
        <SubmitButton data-cy="submit" type="submit" onClick={handleSubmit}>
          <Link to="/" className="Link">
            registriere deinen stuff
          </Link>
        </SubmitButton>
      </FormStyled>
    </CardStyled>
  )

  function handleChange(event) {
    setItemData({ ...itemData, [event.target.name]: event.target.value })
  }
  function setImageUrl(url) {
    setItemData({ ...itemData, image: url })
  }
  function handleSubmit(event) {
    event.preventDefault()
    uploadData(JSON.stringify(itemData))
  }

  function uploadData(itemData) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const request = {
      method: 'POST',
      headers: headers,
      body: itemData,
      redirect: 'follow',
    }

    fetch('/items/', request)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`
const CloseButtonStyled = styled.button`
  display: flex;
  justify-content: flex-end;
  margin: 8px;
  border: none;
  background: var(--secondary);
`

const LabelStyledName = styled.label`
  font-size: 1.2em;
  position: absolute;
  margin: 0 0 0 4px;
  top: 32px;
  left: 8px;
`
const LabelStyled = styled.label`
  font-size: 1.2em;
  text-align: left;
  padding: 4px;
  margin: 16px 4px 0 4px;
`

const DescriptionInput = styled.textarea`
  font-family: sans-serif;
  padding: 4px;
  margin: 4px;
  border: none;
  box-shadow: 1px 2px 4px grey;
  height: 112px;
`

const ImgSection = styled.div`
  display: flex;
  height: 28vh;
  width: 100%;
  justify-content: space-evenly;
`
const QRCodeLabel = styled.p`
  text-decoration: underline;
  text-align: center;
  margin: 2vh 7vw 12px 0;
  width: 112px;
`
const QRCodeStyled = styled.div`
  width: 112px;
`

const SubmitButton = styled.button`
  display: flex;
  font-size: 1em;
  height: 40px;
  width: 300px;
  margin: auto;
  border-radius: 12px;
  background: var(--primary);
  border-radius: 12px;
  box-shadow: 4px 1px 4px lightgray;
  border: 1px solid darkgray;
  .Link {
    text-decoration: none;
    color: black;
    width: 300px;
    margin: auto;
    padding: 8px;
    cursor: default;
  }
  :active {
    background: var(--tertiary);
  }
`

const CardStyled = styled.div`
  position: relative;
  padding: 4px;
  margin: auto;
  width: 90vw;
  height: 87vh;
  border-radius: 4px;
  box-shadow: 10px 5px 15px darkgray;
`
