import React from 'react'
import styled from 'styled-components'
import cardContent from './CardContent.json'

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
              <QrStyled>
                <img src={el.qr} width="80px" height="80px" alt="QR-Code" />
              </QrStyled>
            </CardStyled>
          </div>
        ))}
      </Wrapper>
      <></>
    </>
  )
}

const QrStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
`

const TextSmallStyled = styled.p`
  font-size: 0.8em;
  padding: 4px;
  color: rgb(38, 38, 38);
  margin-right: 10em;
`
const TextStyled = styled.p`
  font-size: 1.3em;
  color: rgb(38, 38, 38);
  padding: 4px;
  margin-right: 4em;
  margin-top: 2em;
  font-family: sans-serif;
  text-shadow: -1px 0 lightgrey, 0 1px lightgrey;
`
const TitleStyled = styled.h2`
  font-family: Roboto;
  color: rgb(38, 38, 38);
  font-size: 2.5em;
  text-align: left;
  margin: 1em 1em 0.8em 4px;
  text-shadow: -1px 0 lightgrey, 0 1px lightgrey;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 30px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
`

const CardStyled = styled.div`
  position: relative;
  top: 5%;
  padding: 10px;
  margin-left: 5vw;
  margin-right: 5vw;
  background-image: linear-gradient(
      to bottom left,
      rgba(245, 246, 252, 0.45),
      rgb(202, 230, 233)
    ),
    ${props => props.image};
  background-size: cover;
  width: 90vw;
  height: 72vh;
  border-radius: 4px;
  box-shadow: 10px 5px 15px darkgray;
  scroll-snap-align: center;
  overflow: scroll;
`
