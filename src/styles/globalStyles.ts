import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    font-family: Roboto, system-ui, sans-serif;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: border-box;
    /* font-size: 62.5%; */
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    /* font-size: 1.6rem; */
  }

  h1,
  h2,
  h3,
  h5,
  p,
  figure {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
