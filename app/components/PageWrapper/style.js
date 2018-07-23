import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.tertiary};
  height: 100%;
  transition: 0.5s;

  ${props => props.overlayOpen && css`
    -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
            transform: scale(0.8);
  `};
`;
