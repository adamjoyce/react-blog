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

export const LoadWrapper = styled.div`
  margin: 4rem 0;
  text-align: center;

  button {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 0.8em;
  }
`;
