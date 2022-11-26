import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');
    * {
        box-sizing: border-box;
        font-family: 'JetBrains Mono', monospace;
    }
    body, html, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
`

export default GlobalStyle