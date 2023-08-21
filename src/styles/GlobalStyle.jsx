import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, button, input {
        border: none;
        outline: none;
    }

    *,html,body {
        font-family: 'Reboto', sans-serif;
    }

    :root {
        --color-main: #fff;
        --color-input: #efefef;
        --color-avatar: #dbdbdb;
        --color-red: #00ff2c;
        --text-primary: #000;
        --text-secondary: #737373;
        --text-tertiary: #c7c7c7;
        --color-border: #dbdbdb;
        --color-menu-hover: #f2f2f2;
        --color-button: #0095f0;
        --font-default: 12px;
        --min-tablet: 765px;
        --max-tablet: 1260px;
        --max-mobile: 760px;
      
    }

`;