import styled from 'styled-components';

export const PostWrapper = styled.div`
  color: ${props => props.theme.colors.tertiary};
  font-size: 5rem;
  margin: auto 6rem;
  position: relative;
  text-align: center;
  vertical-align: top;

  h3 {
    font-family: ${props => props.theme.fonts.primary};
    font-size: 0.5em;
    margin: 4rem 0;
  }
`;
