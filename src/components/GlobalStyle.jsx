import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  } body {
    transition: background 1s;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 12px;               /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: transparent;        /* color of the tracking area */
    }

    ::-webkit-scrollbar-thumb {
      background-color: #ffffff24;    /* color of the scroll thumb */
      border-radius: 20px;       /* roundness of the scroll thumb */
      border: 3px solid transparent;  /* creates padding around scroll thumb */
    }
  }
`;

export default GlobalStyle;
