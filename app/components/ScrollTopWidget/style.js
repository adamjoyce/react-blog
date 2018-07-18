import styled from 'styled-components';
import {reduceAlpha} from '../../utils/helpers';

export const Widget = styled.div`
  bottom: 0;
  display: block;
  font-size: 2rem;
  position: fixed;
  right: 0;
`;

export const Button = styled.button`
  background: ${props => reduceAlpha(props.theme.colors.primary, 0.7)};
  border: none;
  color: ${props => props.theme.colors.tertiary};
  font-size: 1.25em;
  margin: 0.75em;
  padding: 0 0.1em
`;
