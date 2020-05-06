import React, { useState } from 'react'

function ImageUploader() {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('upload_preset', 'upload')
    setLoading(true)

    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/thisismystuff/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
    console.log(file.url)
  }

  return (
    <>
      <p>tap 2 snap</p>
      <input
        type="file"
        name="image"
        placeholder="tap to snap"
        accept="image/*"
        capture="camera/*"
        onChange={uploadImage}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={image} style={{ width: '80px' }} alt="" />
      )}
    </>
  )
}

export default ImageUploader
