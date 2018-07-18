import styled, {css} from 'styled-components';

export const NavBar = styled.nav`
  color: ${props => props.theme.colors.tertiary};
  font-size: 2rem;
  position: absolute;
  right: 0;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1.25em;
  padding: 0.75em;
`;
