import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import CloseButton from './CloseButton'

export default function App() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <>
      <CardStyled>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CloseButtonStyle>
            <CloseButton />
          </CloseButtonStyle>

          <ItemLabel for="item">Wie heißt dein stuff? </ItemLabel>
          <ItemInput
            name="item"
            id="item"
            type="text"
            placeholder="Z.B.: Schlüssel, Handy..."
            ref={register({ required: true, maxLength: 150 })}
          />
          {errors.item && <ErrorMsg>Gib deinem stuff einen Namen!</ErrorMsg>}

          <DescriptionLabel for="description">
            Beschreibe deinen stuff:
          </DescriptionLabel>
          <DescriptionInput
            name="description"
            id="description"
            type="text"
            placeholder="Beschreibe deinen Artikel. Diese Info wird auch für den Finder sichtbar sein."
            ref={register({ required: true, maxLength: 150 })}
          />
          {errors.description && (
            <ErrorMsg>
              Dieses Feld ist notwendig, aber bitte fasse Dich kurz. Max 200
              Zeichen!
            </ErrorMsg>
          )}

          <MailLabel for="mail">E-Mail:</MailLabel>
          <MailInput
            name="mail"
            id="mail"
            type="text"
            placeholder="Unter dieser E-mail kann dich der Finder erreichen."
            ref={register({ required: true })}
          />
          {errors.mail && (
            <ErrorMsg>Bitte gebe eine gültige E-Mail ein!</ErrorMsg>
          )}

          <SubmitButton type="submit">Generate QR-Code</SubmitButton>
        </Form>
      </CardStyled>
    </>
  )
}

const Form = styled.form`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 4fr 1fr;
`
const CloseButtonStyle = styled.button`
  grid-row: 1;
  grid-column: 6;
  border: none;
  background: transparent;
  height: 35px;
`

const ItemLabel = styled.label`
  grid-row: 1;
  grid-column: 1/6;
  text-align: left;
  padding: 5px;
  margin: 15px 5px 0px 5px;
`
const ItemInput = styled.input`
  grid-row: 2;
  grid-column: span 6;
  font-size: 0.8em;
  padding: 5px;
  margin: 5px;
  border: none;
  border-bottom: 1px solid darkgray;
`

const DescriptionLabel = styled.label`
  grid-row: 3;
  grid-column: 1/6;
  text-align: left;
  padding: 5px;
  margin: 10px 5px 5px 5px;
`
const DescriptionInput = styled.textarea`
  grid-row: 4/6;
  grid-column: span 6;
  font-family: sans-serif;
  font-size: 0.8em;
  padding: 5px;
  margin: 5px;
  border: none;
  box-shadow: 1px 2px 4px grey;
  border-bottom: 1px solid darkgray;
`

const MailLabel = styled.label`
  grid-row: 6;
  text-align: left;
  padding: 5px;
  margin: 5px;
`
const MailInput = styled.input`
  grid-row: 7;
  grid-column: span 6;
  font-size: 0.8em;
  padding: 5px;
  margin: 5px;
  border: none;
  border-bottom: 1px solid darkgray;
`

const SubmitButton = styled.button`
  grid-row: 11;
  grid-column: span 6;
  font-size: 0.8em;
  height: 2em;
  height: 48px;
  border-radius: 10px;
`

const CardStyled = styled.div`
  position: relative;
  top: 5%;
  padding: 5px;
  margin-left: 5vw;
  margin-right: 5vw;
  width: 90vw;
  height: 83vh;
  color: black;
  border-radius: 4px;
  box-shadow: 10px 5px 15px darkgray;
`
const ErrorMsg = styled.span`
  font-size: 0.6em;
  color: red;
  text-align: left;
`
