// import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import CloseButton from './CloseButton'
// import ImageUpload from './ImageUpload'
// import { Link } from 'react-router-dom'

// export default function EditForm() {
//   // useEffect(() => {
//   //   fetch('http://localhost:8050/items/')
//   //     .then(res => res.json())
//   //     .then(data => setItemData(data))
//   // }, [])
//   const itemData = props => {
//     const [id, setId] = useState('')
//     const [name, setName] = useState('')
//     const [description, setDescription] = useState('')
//     const [image, setImage] = useState('')
//     // const [routeRedirect, setRedirect] = useState("");

//     function getItem() {
//       fetch('http://localhost:8050/items/' + props.params.id)
//         .then(res => {
//           return res.json()
//         })
//         .then(response => {
//           setId(response.item._id)
//           setName(response.item.name)
//           setDescription(response.item.description)
//           setImage(response.item.image)
//         })
//         .catch(err => {
//           console.log(err)
//         })
//     }

//     // const [itemData, setItemData] = useState({
//     //   // name: 'itemData.name',
//     //   // description: 'itemData.description',
//     //   // mail: 'itemData.mail',
//     //   // image: 'itemdata.image',
//     // })

//     // function handleChange(event) {
//     //   setItemData({ ...itemData, [event.target.name]: event.target.value })
//     // }

//     // function updateData(itemData) {
//     //   const headers = new Headers()
//     //   headers.append('Content-Type', 'application/json')

//     //   const request = {
//     //     method: 'PATCH',
//     //     headers: headers,
//     //     body: itemData,
//     //     redirect: 'follow',
//     //   }

//     //   fetch('http://localhost:8050/items/' + id, request)
//     //     .then(response => response.text())
//     //     .then(result => console.log(result))
//     //     .catch(error => console.log('error', error))
//     // }
//   }
//   return (
//     <CardStyled>
//       <Form>
//         <CloseButtonStyle>
//           <CloseButton />
//         </CloseButtonStyle>
//         {JSON.stringify(itemData)}
//         <HeadlineStyled>edit your stuff</HeadlineStyled>
//         <LabelStyledName for="name">Wie heißt dein stuff?</LabelStyledName>
//         <ItemInput
//           name="name"
//           id="name"
//           type="text"
//           value={itemData.name}
//           onChange={handleChange}
//           placeholder="Z.B.: Schlüssel, Handy..."
//         ></ItemInput>

//         <LabelStyled for="description">Beschreibe deinen stuff:</LabelStyled>
//         <DescriptionInput
//           name="description"
//           id="description"
//           type="text"
//           value={itemData.description}
//           onChange={handleChange}
//           placeholder="Beschreibe deinen Artikel. Diese Info wird auch für den Finder sichtbar sein."
//         />

//         <LabelStyled for="mail">E-Mail:</LabelStyled>
//         <MailInput
//           name="mail"
//           id="mail"
//           type="text"
//           value={itemData.mail}
//           onChange={handleChange}
//           placeholder="Unter dieser E-mail kann dich der Finder erreichen."
//         />

//         <ImgSection>
//           <div>
//             <ImageUpload
//               name="image"
//               id="image"
//               type="file"
//               value={itemData.image}
//               // setImageUrl={setImageUrl}
//             />
//           </div>
//         </ImgSection>
//         <SubmitButton
//           type="submit"
//           // onClick={() => updateData(JSON.stringify(itemData))}
//         >
//           <Link to="/" className="Link">
//             register your stuff
//           </Link>
//         </SubmitButton>
//       </Form>
//     </CardStyled>
//   )
// }
// const HeadlineStyled = styled.h2`
//   position: absolute;
//   top: 16px;
//   left: 25%;
// `
// const ImgSection = styled.div`
//   display: flex;
//   height: 28vh;
//   width: 100%;
//   justify-content: space-evenly;
// `

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `
// const CloseButtonStyle = styled.button`
//   display: flex;
//   justify-content: flex-end;
//   margin: 8px;
//   border: none;
//   background: transparent;
// `

// const LabelStyledName = styled.label`
//   display: flex;
//   margin-top: 28px;
//   padding: 4px;
// `
// const LabelStyled = styled.label`
//   text-align: left;
//   padding: 4px;
//   margin: 16px 4px 0 4px;
// `
// const ItemInput = styled.input`
//   font-size: 0.8em;
//   padding: 0 4px;
//   margin: 12px 4px;
//   border: none;
//   border-bottom: 1px solid darkgray;
// `

// const DescriptionInput = styled.textarea`
//   font-family: sans-serif;
//   font-size: 0.8em;
//   padding: 4px;
//   margin: 4px;
//   border: none;
//   box-shadow: 1px 2px 4px grey;
//   height: 13vh;
// `

// const MailInput = styled.input`
//   font-size: 0.8em;
//   padding: 4px;
//   margin: 4px;
//   border: none;
//   border-bottom: 1px solid darkgray;
// `

// const SubmitButton = styled.button`
//   position: absolute;
//   bottom: 2%;
//   align-content: center;
//   font-size: 1em;
//   height: 2em;
//   width: 87vw;
//   border-radius: 12px;
//   background: rgba(200, 227, 226);
//   border-radius: 10px;
//   box-shadow: 4px 1px 4px lightgray;
//   border: 1px solid darkgray;
//   .Link {
//     text-decoration: none;
//     color: black;
//     padding: 4px 85px;
//   }
//   :active {
//     background: rgb(211, 245, 243);
//   }
// `

// const CardStyled = styled.div`
//   position: relative;
//   top: 2%;
//   padding: 4px;
//   margin-left: 5vw;
//   margin-right: 5vw;
//   width: 90vw;
//   height: 87vh;
//   color: black;
//   border-radius: 4px;
//   box-shadow: 10px 5px 15px darkgray;
// `
