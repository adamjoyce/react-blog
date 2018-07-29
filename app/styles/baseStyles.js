import {injectGlobal, css} from 'styled-components';
import {reduceLuminosity} from '../utils/helpers';

// Default css for all buttons.
export const button = css`
  background: ${props => props.bgcolor};
  border: 1px solid ${props => props.bgcolor};
  box-sizing: border-box;
  color: ${props => props.textcolor};
  display: inline-block;
  padding: 1rem 2rem;
  text-decoration: none;
  text-transform: uppercase;

  :active {
    background: ${props => reduceLuminosity(props.bgcolor, 0.9)};
  }
`;

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

${'' /* Hides the wordpress generated 'more' links - feels super hacky */}
  a.more-link {
    display: none;
  }
`;

export default baseStyles;
