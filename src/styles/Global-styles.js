import { createGlobalStyle, css } from "styled-components";

import GothamBoldTTF from "../assets/fonts/Gotham-Bold.ttf";
import GothamBookTTF from "../assets/fonts/GothamBook.ttf";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "GothamBold";
    src: url(${GothamBoldTTF}) format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "GothamBook";
    src: url(${GothamBookTTF}) format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
  }

  body {
    ${({ theme }) => css`
      background-color: #fafbff;
      color: ${theme.colors.mainColorTxt};
      font-family: "GothamBook";
    `}
  }
`;
