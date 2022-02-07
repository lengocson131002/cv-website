import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: 'Poppins', sans-serif;
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    
    body {
        position: relative;
        color: ${({ theme }) => theme.color.text_dark};
        background: ${({ theme }) => theme.color.background};
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

`

export default GlobalStyles
