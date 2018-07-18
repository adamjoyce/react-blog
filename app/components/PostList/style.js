import styled from 'styled-components';

export const ListWrapper = styled.div`
  background: ${props => props.theme.colors.tertiary};
  display: block;
  font-size: 1.2rem;
  overflow: hidden;
  padding: 0 2rem;
  position: relative;
  top: 100%;
`;

export const ListTitle = styled.h1`
  display: block;
  font-family: ${props => props.theme.fonts.secondary};
  text-align: center;
  margin: 4rem auto;
  width: 100%;
`;

export const Divider = styled.hr`
  width: 5rem;
`;

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
