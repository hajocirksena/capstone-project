import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0
  }

    body {
        font-family: sans-serif;
        height: 100vh;
    }

    #root {
    display: grid; 
    grid-template-rows: 9vh auto;
    height: 100vh;
    background: rgb(245, 246, 252, );
  }
  `
