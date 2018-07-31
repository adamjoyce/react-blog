import styled from 'styled-components';

export const ContentWrapper = styled.div`
  background: ${props => props.theme.colors.tertiary};
  padding: 0 2rem;
  position: relative;

  p {
    padding: 2rem 0;
  }
`;
