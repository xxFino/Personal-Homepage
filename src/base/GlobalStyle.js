import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: ${({ theme }) => theme.color.background};
        font-family: 'Inter', sans-serif;     
        transition: 0.5s;
    }
`;
