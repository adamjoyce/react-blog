import {injectGlobal} from 'styled-components';

const baseStyles = (theme) => injectGlobal`
  html {
    height: 100%;
  }

  body {
    background: #ddd;
    font-family: ${theme.fonts.primary};
    height: 100%;
  }

  #app {
    height: 100%;
  }
`;

export default baseStyles;
