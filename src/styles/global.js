import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ::-webkit-scrollbar {
      display: none;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Montserrat', sans-serif;
    }

    html, body, #root {
      height: 100%;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyles;
