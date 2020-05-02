import React from 'react'
import cardContent from './CardContent.json'
import styled from 'styled-components'

export default function Cards() {
  return (
    <>
      <Wrapper>
        {cardContent.map(el => (
          <div key={el.id}>
            <CardStyled image={`url(${el.image})`}>
              <TitleStyled>{el.item}</TitleStyled>
              <TextStyled>{el.description}</TextStyled>
              <TextSmallStyled>
                Sollte dein {el.item} gefunden werden bist du für den Finder
                unter {el.mail} zu erreichen.
              </TextSmallStyled>
              <ImageStyled>
                <img src={el.qr} height="80px" alt={el.qr} />
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
  margin: 0.5em;
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
  font-size: 2em;
  text-align: left;
  margin: 3.5em 1em 0.8em 4px;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
`

const CardStyled = styled.div`
  position: relative;
  top: 20%;
  padding: 10px;
  margin-left: 5vw;
  margin-right: 5vw;
  background-image: linear-gradient(
      to bottom left,
      rgba(245, 246, 252, 0.45),
      white
    ),
    ${props => props.image};
  background-size: cover;
  width: 90vw;
  height: 70vh;
  color: black;
  border-radius: 4px;
  box-shadow: 10px 5px 15px darkgray;
  scroll-snap-align: center;

  overflow: scroll;
`
