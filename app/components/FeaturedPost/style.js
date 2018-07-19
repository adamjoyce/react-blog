import styled from 'styled-components';

export const PostWrapper = styled.div`
  color: ${props => props.theme.colors.tertiary};
  display: block;
  font-size: 2rem;
  margin: auto 1.5rem;
  position: relative;
  text-align: center;
  vertical-align: top;

  h3 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 0.5em;
    line-height: 1.5em;
    margin: 2rem 0;
  }
`;
