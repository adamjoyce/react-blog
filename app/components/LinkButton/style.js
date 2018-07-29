import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import {reduceLuminosity} from '../../utils/helpers';

import {button} from '../../styles/baseStyles';

export const Button = styled(Link)`
  ${props => button}
`;
