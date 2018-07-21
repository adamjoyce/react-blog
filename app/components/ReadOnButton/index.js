import React from 'react';
import PropTypes from 'prop-types';
import {LinkButton} from './style';
import urls from '../../nav/urls';

const ReadOnButton = (props) => {
  const {textColor, bgColor, post, activePostFunc} = props;
  return (
    <LinkButton
      to={`${urls.post}/${post.slug}`}
      textcolor={textColor}
      bgcolor={bgColor}
      onClick={() => activePostFunc(post)}
      onTouchStart={() => null}>
      {props.text}
    </LinkButton>
  );
};

ReadOnButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  activePostFunc: PropTypes.func.isRequired,
}

ReadOnButton.defaultProps = {
  text: 'Button',
  textColor: '#fff',
  bgColor: '#00a8ce'
}

export default ReadOnButton;
