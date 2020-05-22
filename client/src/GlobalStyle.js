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
    height: 100vh;

    --primary: rgb(202, 230, 233);
    --secondary: transparent;
    --tertiary: rgb(180, 213, 217);
    --pramary-dark: rgb(38, 38, 38);

    h1{
      font-family: Poiret One;
      color: var(--primary-dark);
      font-size: 2em;
    }

    p{
      color: var(--primary-dark);
      padding: 8px;
      font-family: sans-serif;
    }
    
     input{
      font-size: 1em; 
      padding: 0 4px;
      margin: 12px 4px;
      border: none;
      border-bottom: 1px solid darkgray;
     }
     
  }
  `
