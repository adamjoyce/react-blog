import React from 'react';
import PropTypes from 'prop-types';
import {AnchorButton} from './style';

const Button = (props) => {
  const {textColor, bgColor, shadowColor} = props;
  return (
    <AnchorButton
      textColor={textColor}
      bgColor={bgColor}
      onTouchStart={() => null}>
      {props.text}
    </AnchorButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
}

Button.defaultProps = {
  text: 'Button',
  textColor: '#fff',
  bgColor: '#00a8ce',
}

export default Button;
