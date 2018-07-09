import {injectGlobal} from 'styled-components';

import {themeMain as theme} from './themes';

const baseStyles = () => injectGlobal`
  body {
    background: palevioletred;
    font-family: ${theme.font.family};
  }
`;

export default baseStyles;
