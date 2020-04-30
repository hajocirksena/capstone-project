import React from 'react'
import Card from './Card'
import cardContent from './services'
// import Schlüsselbund from './images/Schlüsselbund.png'
// import loadQ from './services'

export default {
  title: 'Card',
  component: Card,
}

export function cards() {
  return (
    <>
      {cardContent.map(el => (
        <div key={el.id}>
          <h2>{el.item}</h2>
          <p>{el.description}</p>
          <p>The finder can reach out to you via: {el.mail}</p>
          <img src={el.image} width="150px" alt={el.item} />
          {el.qr}
        </div>
      ))}
    </>
  )
}

const singlecardContent = {
  item: ' Schlüsselbund',
  description:
    'Alle meine Schlüssel! Dieses Schlüsselbund ist sehr wichtig für mich. Lieber Finder, bitte melde dich bei mir!',
  mail: ' schreibe@hier.de',
  id: 1,
  image: './images/Schlüsselbund.png',
}

export function singleCard() {
  return (
    <>
      <p>
        Here are detailed informations about your
        {singlecardContent.item}.
      </p>
      <p>{singlecardContent.description}</p>
      {singlecardContent.qr}
      <img
        src={'./images/Schlüsselbund.png'}
        width="200px"
        alt={singlecardContent.item}
      />
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mailto:%22test@web.de%22" />
      <p>
        If someone finds your {singlecardContent.item} he is able to contact you
        via {singlecardContent.mail}
      </p>
    </>
  )
}

// export const Simple = () => <Card />
