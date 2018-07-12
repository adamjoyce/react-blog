import styled from 'styled-components';

export const LandingWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  font-family: 'Josefin Sans', sans-serif;
  height: 100%;
  position: relative;
  z-index: 0;
`;

export const LandingOverlay = styled.div`
  background-color: ${props => props.theme.colors.primary};
  position: relative;
  height: 100%;
  opacity: 0;
  pointer-events: none;
`;

export const FeaturedArticle = styled.div`
  color: ${props => props.theme.colors.tertiary};
  font-size: 2rem;
  left: 0;
  margin: 0 1rem;
  position: fixed;
  right: 0;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  vertical-align: top;

  h3 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 0.5em;
    margin: 1rem 0;
  }
`;

export const ReadOnButton = styled.button`
  background: ${props => props.theme.colors.tertiary};
  border: none;
  box-shadow: 5px 5px 5px ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  font-size: 0.5em;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  vertical-align: top;
`;
