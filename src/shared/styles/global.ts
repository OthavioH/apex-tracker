import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
    }

    body {
        font-family: "Kanit", sans-serif;
        font-size: 14px;
        background: var(--background-color);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }

    html, body, :root {
        height: 100%;
    }
    
    :root {
        --primary: #0f0f0f;
        --background-color: #0f0f0f;
        --accent-color: #b30000;
        --hover-accent-color: #870000;

        --primary-text-color: #ffffff;
        --accent-text-color: #e30202;

        --default-page-padding: 20px;
    }
`;
