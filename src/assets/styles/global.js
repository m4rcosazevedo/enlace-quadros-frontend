import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    background: #ddd;
  }

  body, input, textarea, select {
    font-family: 'Ubuntu', sans-serif;
  }

  input, textarea, select {
    font-size: .9rem;
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
  }
`
