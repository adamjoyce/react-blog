import styled from 'styled-components';

export const ListWrapper = styled.div`
  background: ${props => props.theme.colors.tertiary};
  display: block;
  font-size: 3rem;
  overflow: hidden;
  padding: 0 3rem;
  position: relative;
  top: 100%;
`;

export const ListTitle = styled.h1`
  display: block;
  text-align: center;
  margin: 4rem auto;
  width: 100%;
`;

export const Divider = styled.hr`
  width: 10rem;
`;

export const Article = styled.div`
  background: ${props => props.theme.colors.primary};
  line-height: 1.5em;
  margin: 4rem 0;

  h2 {

  }
`;
