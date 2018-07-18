import styled from 'styled-components';

export const NavList = styled.ul`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1em;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  text-transform: uppercase;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
`;

export const NavItem = styled.li`
  margin: 3rem;

  a {
    color: ${props => props.theme.colors.tertiary};
    text-decoration: none;
  }
`;
