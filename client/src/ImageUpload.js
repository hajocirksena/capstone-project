import React, { useState } from 'react'
import styled from 'styled-components'

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
      <Wrapper>
        tap 2 snap
        <input
          type="file"
          name="image"
          width="auto"
          accept="image/*"
          capture="camera/*"
          onChange={uploadImage}
          className="btn"
        />
      </Wrapper>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ImgStyle>
          <img
            src={image}
            style={{ width: '80px', maxHeight: '100px' }}
            alt=""
          />
        </ImgStyle>
      )}
    </>
  )
}

const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
  padding: 9px;
  margin-left: 10px;
  width: 110px;
  height: 35px;
  overflow: hidden;
  position: relative;
  background: #bfdad9;
  border-radius: 10px;
  box-shadow: 3px 1px 3px lightgray;
  border: 1px solid darkgray;
  .btn {
    font-size: 200px;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
  }
`
const ImgStyle = styled.div`
  max-width: 70px;
  max-height: 60px;
  height: auto;
  margin: 10px 5px 5px 8%;
`
export default ImageUploader
