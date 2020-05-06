import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import CloseButton from './CloseButton'
import ImageUpload from './ImageUpload'

export default function Formular() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  // const { register } = useForm({
  //   defaultValues: {
  //     firstName: 'bill',
  //     lastName: 'luo',
  //     email: 'bluebill1049@hotmail.com',
  //     pets: ['dog', 'cat'],
  //   },
  // })

  return (
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
        <ErrorMsg>{errors.item && <p>insert name!</p>}</ErrorMsg>

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
        <ErrorMsg>
          {errors.description && <p> insert description! up to 150 signs!</p>}
        </ErrorMsg>

        <MailLabel for="mail">E-Mail:</MailLabel>
        <MailInput
          name="mail"
          id="mail"
          type="text"
          placeholder="Unter dieser E-mail kann dich der Finder erreichen."
          ref={register({ required: true })}
        />
        <ErrorMsg>{errors.mail && <p>insert e-mail</p>}</ErrorMsg>

        <ImageUpload
          for="image"
          id="image"
          name="image"
          type="file"
          ref={register({ required: true })}
        />
        <ErrorMsg>{errors.mail && <p>upload a pic</p>}</ErrorMsg>

        <SubmitButton type="submit">Generate QR-Code</SubmitButton>
      </Form>
    </CardStyled>
  )
}

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
  position: relative;
  align-items: flex-end;
  font-size: 1em;
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
  height: 80vh;
  color: black;
  border-radius: 4px;
  box-shadow: 10px 5px 15px darkgray;
`
