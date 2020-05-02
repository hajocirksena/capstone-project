import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0
  }

    body {
        font-family: sans-serif;
        display: grid;
        height: 100%;

    }

    #root {
    display: grid; 
    background: rgb(245, 246, 252, );
  }
  `
