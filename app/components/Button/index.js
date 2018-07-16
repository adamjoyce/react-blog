import React from 'react';
import {AnchorButton} from './style';

const Button = (props) => (
  <AnchorButton onTouchStart={() => null}>{props.text}</AnchorButton>
);

export default Button;
