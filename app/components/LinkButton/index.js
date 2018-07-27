import React from 'react';
import PropTypes from 'prop-types';

import {Button} from './style';

/**
 * A router link button.
 */
const LinkButton = (props) => {
  const {to, bgColor, textColor} = props;
  return (
    <Button
      to={to}
      bgcolor={bgColor}
      textcolor={textColor}>
      {props.children || 'Button'}
    </Button>
  );
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
}

LinkButton.defaultProps = {
  to: '/',
  bgColor: '#00a8ce',
  textColor: '#fff'
}

export default LinkButton;
