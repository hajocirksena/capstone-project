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

    setImage(file.url)
    setLoading(false)
  }

  return (
    <>
      <Wrapper>
        tap 2 snap
        <input
          type="file"
          name="image"
          accept="image/*"
          capture="camera"
          onChange={uploadImage}
          className="btn"
        />
      </Wrapper>

      {loading ? (
        <P>Loading...</P>
      ) : (
        <ImgStyle>
          <img
            src={image}
            id="image"
            style={{ width: '80px', maxHeight: '120px' }}
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
  padding: 5px;
  margin-left: 7vw;
  margin-top: 3vw;
  width: 110px;
  height: 1.7em;
  overflow: hidden;
  position: relative;
  background: rgba(200, 227, 226);
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
  display: flex;
  justify-content: center;
  max-width: 110px;
  max-height: 110px;
  align-items: center;
  height: auto;
  margin: 2vh auto 5px auto;
`

const P = styled.p`
  margin: 2vh 5px 5px 13vw;
`
export default ImageUploader
