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

    &, &:hover {
      color: var(--dark);
      text-decoration: none;
    }
  }

  .page-item {
    &.active .page-link {
      background-color: var(--dark);
      border-color: var(--dark);
    }

    .page-link {
      color: var(--dark);
    }
  }

  .btn-primary {
    background-color: var(--dark);
    border-color: var(--dark);

    &.focus,
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, .5);
    }

    &:hover,
    &.focus,
    &:focus,
    &:not(:disabled):not(.disabled).active,
    &:not(:disabled):not(.disabled):active {
      background-color: var(--gray);
      border-color: var(--gray);
    }
  }

  .alert {
    position: fixed;
    z-index: 90;
    min-width: 50vw;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    box-shadow: 0 0 100vw 10px rgba(0, 0, 0, .5);
  }
`
