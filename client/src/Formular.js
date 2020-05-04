import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

export default function App() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <>
      <CardStyled>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label for="item">Wie heißt dein stuff? </Label>
          <Input
            name="item"
            id="item"
            type="text"
            placeholder="Z.B.: Schlüssel, Handy..."
            ref={register({ required: true, maxLength: 150 })}
          />
          {errors.item && <span>Gib deinem stuff einen Namen!</span>}
          <Label for="description">Beschreibe deinen stuff: </Label>
          <Textarea
            name="description"
            id="description"
            type="text"
            placeholder="Beschreibe deinen Artikel. Diese Info wird auch für den Finder sichtbar sein."
            ref={register({ required: true, maxLength: 150 })}
          />
          {errors.description && (
            <span>
              Dieses Feld ist notwendig, aber bitte fasse Dich kurz. Max 200
              Zeichen!
            </span>
          )}

          <Label for="mail">E-Mail:</Label>
          <Input
            name="mail"
            id="mail"
            type="text"
            placeholder="Unter dieser E-mail kann dich der Finder erreichen."
            ref={register({ required: true })}
          />
          {errors.mail && <span>Bitte gebe eine gültige E-Mail ein!</span>}
          <Button type="submit">Generate QR-Code</Button>
        </Form>
      </CardStyled>
    </>
  )
}

const Button = styled.button`
  font-size: 0.8em;
  height: 2em;
  width: 40%;
  height: 48px;
  border-radius: 10px;
`
const Textarea = styled.textarea`
  font-family: sans-serif;
  font-size: 0.8em;
  padding: 5px;
  margin: 5px;
  height: 20vh;
  border: none;
  box-shadow: 1px 2px 4px grey;
  border-bottom: 1px solid darkgray;
`
const Input = styled.input`
  font-size: 0.8em;
  padding: 5px;
  margin: 5px;
  border: none;
  border-bottom: 1px solid darkgray;
`
const Label = styled.label`
  text-align: left;
  padding: 5px;
  margin: 5px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CardStyled = styled.div`
  position: relative;
  top: 5%;
  padding: 10px;
  margin-left: 5vw;
  margin-right: 5vw;
  width: 90vw;
  height: 73vh;
  color: black;
  border-radius: 4px;
  box-shadow: 10px 5px 15px darkgray;
`
