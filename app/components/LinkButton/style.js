import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {reduceLuminosity} from '../../utils/helpers';

export const Button = styled(Link)`
  background: ${props => props.bgcolor};
  border: 1px solid ${props => props.bgcolor};
  box-sizing: border-box;
  color: ${props => props.textcolor};
  display: inline-block;
  font-size: 0.5em;
  padding: 1rem 2rem;
  text-decoration: none;
  text-transform: uppercase;

  :active {
    background: ${props => reduceLuminosity(props.bgcolor, 0.9)};
  }
`;
