import React, { useState } from 'react'
import styled from 'styled-components/macro'

function ImageUploader({ setImageUrl }) {
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
    setImageUrl(file.url)
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
        {loading ? (
          <StyledText>
            <img
              src="./images/Loading.gif"
              alt="loading"
              className="loading-image"
            />
          </StyledText>
        ) : (
          <ImgStyle>
            <img src={image} id="image" alt="" />
          </ImgStyle>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: inline-block;
  text-align: center;
  padding: 4px;
  margin-top: 2vh;
  width: 112px;
  height: 1.7em;
  position: relative;
  background: rgba(200, 227, 226);
  border-radius: 10px;
  box-shadow: 3px 1px 3px lightgray;
  border: 1px solid darkgray;
  .btn {
    font-size: 20px;
    width: 112px;
    position: absolute;
    left: 0;
    top: -2px;
    opacity: 0;
  }
  .loading-image {
    display: block;
    margin: auto;
  }
  :active {
    background: lightgrey;
  }
`
const ImgStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 112px;
  max-height: 112px;
  height: auto;
  margin: 2vh auto 5px auto;
  img {
    width: 80px;
    max-height: 120px;
  }
`

const StyledText = styled.p`
  display: flex;
  justify-content: center;
  padding: 12px;
`
export default ImageUploader
