import styled from 'styled-components';
import {reduceLuminosity} from '../../utils/helpers';

export const AnchorButton = styled.a`
  background: ${props => props.bgColor};
  border: 1px solid ${props => props.bgColor};
  color: ${props => props.textColor};
  display: inline-block;
  font-size: 0.5em;
  padding: 1rem 2rem;
  text-transform: uppercase;

  :active {
    background: ${props => reduceLuminosity(props.bgColor, 0.9)};
  }
`;
