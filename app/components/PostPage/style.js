import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background: ${props => props.theme.colors.tertiary};
  font-size: 1.3rem;
  padding: 0 2rem;
  position: relative;
`;

export const Post = styled.div`
  line-height: 1.75em;
  padding: 2rem 0;

  h2 {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 1.5em;
    line-height: 1.5em;
  }

  h3 {
    color: #aaa;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 0.833em;
    line-height: 1.5em;
    margin: 1rem 0;
  }

  p {
    margin: 2rem 0;
  }

  ${'' /* a {
    display: block;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 0.833em;
    line-height: 1em;
    margin-top: 1.5rem;
    text-align: center;
  } */}
`;
