import styled, {css} from 'styled-components';
import {reduceAlpha} from '../../utils/helpers';

export const ScrollButton = styled.button`
  background: none;
  border: 2px solid transparent;
  bottom: 0;
  display: block;
  font-size: 1.75rem;
  margin: 0;
  opacity: 0;
  padding: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  transition: opacity 0.5s;

  ${props => props.visible && css`
    opacity: 1;
    pointer-events: auto;
  `};
`;

export const Widget = styled.div`
  background: ${props => reduceAlpha(props.theme.colors.primary, 0.7)};
  color: ${props => props.theme.colors.tertiary};
  font-size: 1em;
  margin: 1em;
  padding: 0.1em 0.3em;
`;
