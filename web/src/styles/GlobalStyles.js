import {createGlobalStyle} from 'styled-components';

export const GlobalStyles  = createGlobalStyle`

  :root {
    --background-body-color: #131720;
    --background-search-color: #151f30;
    --text-color: white;
    --icon-color: #2f80ed;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smooth: antialiased;
  }

  body {
    margin: 0;
    background-color: var(--background-body-color);
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }
`;
