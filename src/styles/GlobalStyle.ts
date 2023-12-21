// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// :root {
//   --foreground-rgb: 0, 0, 0;
//   --background-start-rgb: 100, 100, 100;
//   --background-end-rgb: 255, 255, 255;
// }

// @media (prefers-color-scheme: dark) {
//   :root {
//     --foreground-rgb: 255, 255, 255;
//     --background-start-rgb: 0, 0, 0;
//     --background-end-rgb: 0, 0, 0;
//   }
// }

// body {
//   color: rgb(var(--foreground-rgb));
//   background:
//     rgb(var(--background-start-rgb));
// }
import { createGlobalStyle, css } from "styled-components";

import reset from "./reset.css";

export const GlobalStyle = createGlobalStyle`

${reset}

  #__next {
    position: relative;
    background-color: #ffffff;
    margin: 0 auto;
    min-height: 100vh;
    // 공통 스타일 (모바일)
    @media (max-width: 600px) {
      // 모바일 화면 스타일
    min-width: 360px;
    // max-width: 420px;
  }

  }


  #__portal {
    margin: 0 auto;
    // 공통 스타일 (모바일)
    @media (max-width: 600px) {
      // 모바일 화면 스타일
    max-width: 420px;
  }
  }

  html {
    height: 100vh;
    box-sizing: border-box;
    -webkit-touch-callout : none;
  }

  *,
  *:after,
  *:before {
    // box-sizing: inherit;
  }

  :root {
    --vh: 100%;
  }

  body {
    height: 100vh;
    background-color: #ddd;
    // letter-spacing: -0.3px;

    // @media only screen and (max-width: 420px) {
    //   background-color: #ffffff;
    // }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    outline: none;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  svg,
  img {
    vertical-align: bottom;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input,
  textarea,
  [contenteditable] {
    -webkit-user-select: text;
    user-select: text;
  }
  input[type='file'],
  input[type='radio'],
  input[type='checkbox'] {
    display: none;
  }
`;
