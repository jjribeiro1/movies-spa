import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {
  ${({ theme }) => css`
    background-color: ${theme.colors.pageBg};
  `}
  height: 100%;
}
body {
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
`;
