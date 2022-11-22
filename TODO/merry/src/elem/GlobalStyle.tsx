import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
   ${reset};

    html {
        font-size: 62.5%;
        line-height: 1;
    }

    *{
        margin: 0;
        padding: 0;
    }

    .layout {
        max-width: 80%;
        min-width: 50%;
        padding: 4rem 0px;
        margin: auto;
    }
`;

export default GlobalStyle;
