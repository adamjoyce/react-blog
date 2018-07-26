import styled from 'styled-components';

export const PageWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
  bottom: 0;
  color: ${props => props.theme.colors.tertiary};
  font-family: 'Josefin Sans', sans-serif;
  font-size: 2rem;
  left: 0;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  right: 0;
`;

export const TextWrapper = styled.div`
  left: 0;
  position: relative;
  text-align: center;
  top: 50%;
  -webkit-transform: translateY(-60%);
      -ms-transform: translateY(-60%);
          transform: translateY(-60%);
  right: 0;
`;

export const Code = styled.div`
  font-family: Damion, sans-serif;
  font-size: 5em;
`;

export const Text = styled.p`
  font-size: 0.8em;
  margin: 2rem 0;
`;
