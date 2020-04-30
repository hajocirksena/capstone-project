import React from 'react'
import Card from '../Card'
import Schlüsselbund from '../images/Schlüsselbund.png'
import Hund from '../images/Hund.png'
import Handy from '../images/Handy.png'

export default {
  title: 'Card',
  component: Card,
}

const cardContent = [
  {
    item: ' Schlüsselbund',
    description:
      'Alle meine Schlüssel! Dieses Schlüsselbund ist sehr wichtig für mich. Liber Finder, bitte melde dich bei mir!',
    mail: ' schreibe@hier.de',
    id: 1,
    image: { Schlüsselbund },
  },
  {
    item: ' Hund',
    description:
      'Oh nein, der kleine Drago ist abgehauen... Bitte melde dich bei mir und bringe Drago zurück zu seiner Familie!',
    mail: ' schreibe@dragofam.de',
    id: 2,
    image: { Hund },
  },
  {
    item: ' Handy',
    description:
      'Mein Handy, mein Handy! Ich Schussel hab mein Iphone 30X verloren. Bitte sei doch so lieb, melde Dich bei mir und gib es mir zurück! Ich belohne dich mit einer Kugel Eis!',
    mail: ' Iphone@weg.de',
    id: 3,
    image: { Handy },
  },
]
export function cards() {
  return (
    <>
      {cardContent.map(el => (
        <div>
          <h2>{el.item}</h2>
          <p>{el.description}</p>
          <img src={el.image} width="150px" alt={el.item} />
          <p>{el.mail}</p>
        </div>
      ))}
    </>
  )
}

const singlecardContent = {
  item: ' Schlüsselbund',
  description:
    'Alle meine Schlüssel! Dieses Schlüsselbund ist sehr wichtig für mich. Liber Finder, bitte melde dich bei mir!',
  mail: ' schreibe@hier.de',
  id: 1,
  image: { Schlüsselbund },
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
      <img src={Schlüsselbund} width="200px" alt={singlecardContent.item} />
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mailto:%22test@web.de%22" />
      <p>
        If someone finds your {singlecardContent.item} he is able to contact you
        via {singlecardContent.mail}
      </p>
    </>
  )
}

// export const Simple = () => <Card />
