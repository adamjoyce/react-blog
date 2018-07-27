import React from 'react';
import PropTypes from 'prop-types';
import urls from '../../nav/urls';

import LinkButton from '../LinkButton';

/**
 * Button used to navigate to a post.
 */
const ReadOnButton = (props) => {
  const {bgColor, textColor, post, activePostFunc} = props;
  return (
    <LinkButton
      to={`${urls.post}/${post.slug}`}
      bgColor={bgColor}
      textColor={textColor}
      onClick={() => activePostFunc(post)}
      onTouchStart={() => null}>
      Read On
    </LinkButton>
  );
};

ReadOnButton.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  post: PropTypes.object.isRequired,
  activePostFunc: PropTypes.func.isRequired,
}

export default ReadOnButton;
