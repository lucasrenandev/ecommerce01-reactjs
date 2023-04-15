import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        list-style: none;
        text-decoration: none;
    }
    
    :root {
        --btn-color: #c8815f;
    }
    
    #root {
        width: 100%;
        min-height: 100vh;
        background-color: transparent;
        color: #000;
    }

    section {
        padding: 90px 14%;
        width: 100%;
    }

    img, a {
        display: inline-block;
    }

`