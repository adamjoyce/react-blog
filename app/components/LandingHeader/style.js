import styled from 'styled-components';

export const LandingWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2rem;
  height: 100%;
  position: relative;
`;

export const LandingOverlay = styled.div`
  background-color: ${props => props.theme.colors.primary};
  position: relative;
  height: 100%;
  opacity: 0;
`;

export const ArtileTitle = styled.h1`
  color: ${props => props.theme.colors.tertiary};
  left: 0;
  position: fixed;
  right: 0;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
`;
