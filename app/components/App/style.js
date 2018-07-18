import styled, {css} from 'styled-components';

export const PageWrapper = styled.div`
  height: 100%;
  transition: 0.5s;

  ${props => props.overlayOpen && css`
    -webkit-transform: scale(0.8);
        -ms-transform: scale(0.8);
            transform: scale(0.8);
  `};
`;
