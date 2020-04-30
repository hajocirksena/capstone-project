import React from 'react'

const cardContent = [
  {
    item: ' Schlüsselbund',
    description:
      'Alle meine Schlüssel! Dieses Schlüsselbund ist sehr wichtig für mich. Lieber Finder, bitte melde dich bei mir!',
    mail: ' schreibe@hier.de',
    id: 1,
    image: './images/Schlüsselbund.png',
    qr: (
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?data=[URL-codierter-Text]&size=100x100"
        alt=""
        title=""
      />
    ),
  },
  {
    item: ' Hund',
    description:
      'Oh nein, der kleine Drago ist abgehauen... Bitte melde dich bei mir und bringe Drago zurück zu seiner Familie!',
    mail: ' schreibe@dragofam.de',
    id: 2,
    image: './images/Hund.png',
    qr: (
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?data=[URL-codierter-Text]&size=100x100"
        alt=""
        title=""
      />
    ),
  },
  {
    item: ' Handy',
    description:
      'Mein Handy, mein Handy! Ich Schussel hab mein Iphone 30X verloren. Bitte sei doch so lieb, melde Dich bei mir und gib es mir zurück! Ich belohne dich mit einer Kugel Eis!',
    mail: ' Iphone@weg.de',
    id: 3,
    image: './images/Handy.png',
    qr: (
      <img
        src="https://api.qrserver.com/v1/create-qr-code/?data=[URL-codierter-Text]&size=100x100"
        alt=""
        title=""
      />
    ),
  },
]

export default cardContent

// export function loadQR() {
//   return fetch(
//     'http(s)://api.qrserver.com/v1/create-qr-code/?data=[URL-codierter-Text]&size=[150]x[150]'
//   ).then(res => res.json())
// }
