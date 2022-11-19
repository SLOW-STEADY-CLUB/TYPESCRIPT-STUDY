import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  html {
    font-size: 62.5%;
    line-height: 1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "SUIT", sans-serif;
  }


  button {
    cursor: pointer;
  }

  //공통 스타일링 빼기
  .array {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .layout {
    max-width: 50%;
    min-width: 30%;
    padding: 4rem 0px;
    margin: auto;
    background-color: #EFF5F5;
  }
`;

export default GlobalStyle;
