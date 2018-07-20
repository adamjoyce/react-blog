import styled, {css} from 'styled-components';
import {reduceAlpha} from '../../utils/helpers';

export const Overlay = styled.div`
  background: ${props => reduceAlpha(props.theme.colors.primary, 0.7)};
  font-size: 2rem;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  -webkit-transform: translateY(100%);
      -ms-transform: translateY(100%);
          transform: translateY(100%);
  transition: transform 0.5s;
  width: 100%;
  z-index: 1;

  ${props => props.overlayOpen && css`
    -webkit-transform: translateY(0%);
        -ms-transform: translateY(0%);
            transform: translateY(0%);
    transition: transform 0.5s;
  `};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.tertiary};
  font-size: 0.825em;
  padding: 0.825em;
  position: absolute;
  right: 0;
`;
