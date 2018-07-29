import styled from 'styled-components';

export const Post = styled.div`
  line-height: 1.75em;
  margin: 3rem 0;

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

  a {
    display: block;
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 0.833em;
    line-height: 1em;
    margin-top: 1.5rem;
    text-align: center;
  }
`;

export const Divider = styled.hr`
  width: 5rem;
`;
