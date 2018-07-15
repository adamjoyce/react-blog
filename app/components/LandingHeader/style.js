import styled from 'styled-components';

export const LandingWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  font-family: 'Josefin Sans', sans-serif;
  height: 100%;
  position: fixed;
`;

export const FeaturedArticle = styled.div`
  color: ${props => props.theme.colors.tertiary};
  font-size: 5rem;
  margin: auto 2rem;
  position: relative;
  text-align: center;
  vertical-align: top;

  h3 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 0.5em;
    margin: 2rem 0;
  }
`;

export const ReadOnButton = styled.a`
  background: ${props => props.theme.colors.tertiary};
  border: none;
  box-shadow: 10px 10px 20px ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  display: inline-block;
  font-size: 0.5em;
  padding: 0.75rem 3rem;
  text-transform: uppercase;
`;
