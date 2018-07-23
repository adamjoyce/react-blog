import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.tertiary};
  display: block;
  font-size: 1.75rem;
  height: 100%;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Title = styled(Link)`
  color: inherit;
  display: inline-block;
  font-family: Damion, sans-serif;
  padding: 1em;
  text-decoration: none;
`;
