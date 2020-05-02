import React from 'react'
import cardContent from './CardContent.json'
import styled from 'styled-components'

export default function Cards() {
  return (
    <>
      <Wrapper>
        {cardContent.map(el => (
          <div key={el.id}>
            <CardStyled background={el.image}>
              <TitleStyled>{el.item}</TitleStyled>
              <TextStyled>{el.description}</TextStyled>
              <TextSmallStyled>
                Sollte dein {el.item} gefunden werden bist du für den Finder
                unter {el.mail} zu erreichen.
              </TextSmallStyled>
              <ImageStyled>
                <img
                  src={el.image}
                  height="120px"
                  min-width="100px"
                  alt={el.item}
                />
                <img src={el.qr} height="120px" min-width="100px" alt={el.qr} />
              </ImageStyled>
            </CardStyled>
          </div>
        ))}
      </Wrapper>
    </>
  )
}

const ImageStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const CardStyled = styled.div`
  position: relative;
  top: 20%;
  padding: 10px;
  margin: 5px;
  height: 430px;
  width: 340px;
  background: rgb(176, 224, 230);
  border-radius: 4px;
  box-shadow: 1px 3px 15px grey;
  overflow: scroll;
`
const TextSmallStyled = styled.p`
  font-size: 0.8em;
  padding: 4px;
`
const TextStyled = styled.p`
  font-size: 1.2em;
  padding: 4px;
`

const TitleStyled = styled.h2`
  font-family: sans-serif;
  font-size: 1.8em;
  text-align: left;
  margin: 3em 1em 1em 0;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100vh;
  overflow-x: scroll;
`
