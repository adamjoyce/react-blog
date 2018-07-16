import styled from 'styled-components';

export const AnchorButton = styled.a`
  background: ${props => props.theme.colors.tertiary};
  border: none;
  box-shadow: 10px 10px 20px ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  display: inline-block;
  font-size: 0.5em;
  padding: 2rem 4rem;
  text-transform: uppercase;

  :active {
    background: ${props => props.theme.colors.tertiaryDull};
  }
`;
