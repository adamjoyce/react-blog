import styled from 'styled-components';

export const LandingWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  font-family: 'Josefin Sans', sans-serif;
  height: 100vh;
  position: fixed;
`;

export const FeaturedPost = styled.div`
  color: ${props => props.theme.colors.tertiary};
  font-size: 5rem;
  margin: auto 5rem;
  position: relative;
  text-align: center;
  vertical-align: top;

  h3 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 0.5em;
    margin: 4rem 0;
  }
`;

export const Test = styled.div`
  color: blue;
`;
