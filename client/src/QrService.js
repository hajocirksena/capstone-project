import React, { useState, useEffect } from 'react'

export default function Qr() {
  const [QrCode, setQrCode] = useState(['Hier sollte Ihr code stehen'])

  useEffect(() => {
    fetch(
      'http://api.qrserver.com/v1/create-qr-code/?data=[This is my stuff]&size=[80]x[80]'
    )
      .then(response => response.json())
      .then(data => setQrCode(data.reverse()))
  }, [])

  //   function loadFromStorage(data) {
  //     try {
  //       return JSON.parse(localStorage.getItem(data))
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }

  return (
    <>
      <div>{JSON.stringify(QrCode)}</div>
      <img src={QrCode} />
      <div>{QrCode}</div>
      <img
        src={`url(${'http://api.qrserver.com/v1/create-qr-code/?data=[This is my stuff]&size=[80]x[80]'})`}
      />
    </>
  )
}
