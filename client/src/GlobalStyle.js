import { createGlobalStyle } from 'styled-components/'

export default createGlobalStyle`
  * {
      box-sizing: border-box;
  }

    body {
        font-family: sans-serif;
    }

    #root {
    display: grid;
    grid-template-rows: auto ;
    overflow: scroll;
    height: 100vh;
    background: #e3e0de;
  }
  `
