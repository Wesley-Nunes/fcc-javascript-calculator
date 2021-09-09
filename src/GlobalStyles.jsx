import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    text-decoration: none;

    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Droid Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;    

    background-color: hsl(176, 63%, 39%);

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyles;
