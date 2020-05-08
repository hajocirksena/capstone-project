import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import CloseButton from './CloseButton'
import ImageUpload from './ImageUpload'
import { QRCode } from 'react-qr-svg'

export default function Formular() {
  const { register, errors, handleSubmit } = useForm()

  const [itemData, setItemData] = useState({
    name: '',
    description: '',
    mail: '',
    image: '',
  })

  function handleChange(event) {
    setItemData({ ...itemData, [event.target.name]: event.target.value })
  }
  function setImageUrl(url) {
    setItemData({ ...itemData, image: url })
  }

  return (
    <CardStyled>
      <Form onSubmit={handleSubmit()}>
        <CloseButtonStyle>
          <CloseButton />
        </CloseButtonStyle>
        <ItemLabel for="name">Wie heißt dein stuff?</ItemLabel>
        <ItemInput
          name="name"
          id="name"
          type="text"
          value={itemData.name}
          onChange={handleChange}
          placeholder="Z.B.: Schlüssel, Handy..."
          ref={register({ required: true, maxLength: 150 })}
        />
        <ErrorMsg>{errors.item && <p>insert name!</p>}</ErrorMsg>
        <DescriptionLabel for="description">
          Beschreibe deinen stuff:
        </DescriptionLabel>
        <DescriptionInput
          name="description"
          id="description"
          type="text"
          value={itemData.description}
          onChange={handleChange}
          placeholder="Beschreibe deinen Artikel. Diese Info wird auch für den Finder sichtbar sein."
          ref={register({ required: true, maxLength: 150 })}
        />
        <ErrorMsg>
          {errors.description && <p> insert description! up to 150 signs!</p>}
        </ErrorMsg>
        <MailLabel for="mail">E-Mail:</MailLabel>
        <MailInput
          name="mail"
          id="mail"
          type="text"
          value={itemData.mail}
          onChange={handleChange}
          placeholder="Unter dieser E-mail kann dich der Finder erreichen."
          ref={register({ required: true })}
        />
        <ErrorMsg>{errors.mail && <p>insert e-mail</p>}</ErrorMsg>

        <ImgSection>
          <div>
            <ImageUpload
              name="image"
              id="image"
              type="file"
              value={itemData.image}
              setImageUrl={setImageUrl}
              ref={register({ required: true })}
            />
          </div>

          <QRCodeStyled>
            <QRCodeLabel>your code!</QRCodeLabel>
            <QRCode name="QR-Code" value={JSON.stringify(itemData)} />
          </QRCodeStyled>
        </ImgSection>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </CardStyled>
  )
}
const ImgSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  height: 28vh;
  width: 100%;
`
const QRCodeLabel = styled.section`
  display: inline-block;
  text-align: center;
  padding: 5px;
  margin: 3vw 7vw 20px 0;
  width: 110px;
  height: 1.7em;
  background: rgba(200, 227, 226);
  border-radius: 10px;
  box-shadow: 3px 1px 3px lightgray;
  border: 1px solid darkgray;
`
const QRCodeStyled = styled.div`
  position: absolute;
  margin-left: 180px;
  width: 110px;
  grid-row: 2;
  grid-column: 2;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const CloseButtonStyle = styled.button`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  border: none;
  background: transparent;
`

const ItemLabel = styled.label`
  text-align: left;
  padding: 5px;
  margin: 15px 5px 0 5px;
`
const ItemInput = styled.input`
  font-size: 0.8em;
  padding: 5px;
  margin: 5px;
  border: none;
  border-bottom: 1px solid darkgray;
`

const DescriptionLabel = styled.label`
  text-align: left;
  padding: 5px;
  margin: 15px 5px 0 5px;
`
const DescriptionInput = styled.textarea`
  font-family: sans-serif;
  font-size: 0.8em;
  padding: 5px;
  margin: 5px;
  border: none;
  box-shadow: 1px 2px 4px grey;
  height: 13vh;
`

const MailLabel = styled.label`
  text-align: left;
  padding: 5px;
  margin: 20px 5px 0 5px;
`
const MailInput = styled.input`
  font-size: 0.8em;
  padding: 5px;
  margin: 5px;
  border: none;
  border-bottom: 1px solid darkgray;
`

const ErrorMsg = styled.p`
  font-size: 0.6em;
  color: red;
  margin: 5px;
`

const SubmitButton = styled.button`
  position: absolute;
  bottom: 2%;
  align-content: center;
  font-size: 1em;
  height: 2em;
  width: 87vw;
  border-radius: 10px;
  background: rgba(200, 227, 226);
  border-radius: 10px;
  box-shadow: 3px 1px 3px lightgray;
  border: 1px solid darkgray;
`

const CardStyled = styled.div`
  position: relative;
  top: 2%;
  padding: 5px;
  margin-left: 5vw;
  margin-right: 5vw;
  width: 90vw;
  height: 87vh;
  color: black;
  border-radius: 4px;
  box-shadow: 10px 5px 15px darkgray;
`
