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

    html, body {
        min-height: 100vh;
    }
    
    :root {
        --primary: #0f0f0f;
        --background-color: #0f0f0f;
        --accent-color: #b30000;
        --hover-accent-color: #870000;

        --primary-text-color: #ffffff;
        --accent-text-color: #e30202;

        --default-page-padding: 20px;

        --big-title-size: 100px;
        --mobile-big-title-size: 55px;
        --giant-text-size: 3.8rem;
        --mobile-giant-text-size: 2.5rem;

    }
`;

export const mobileBreakpoint = "600px";
export const tabletBreakpoint = "768px";
export const desktopBreakpoint = "1024px";
