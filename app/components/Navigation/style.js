import styled, {css} from 'styled-components';

export const NavBar = styled.nav`
  color: ${props => props.theme.colors.tertiary};
  display: block;
  font-size: 1.75rem;
  position: absolute;
  width: 100%;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1em;
  padding: 1em;
  position: absolute;
  right: 0;
`;
