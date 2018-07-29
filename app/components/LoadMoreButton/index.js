import React from 'react';
import PropTypes from 'prop-types';

import {Button} from './style';

/**
 * Button used to load more blog posts.
 */
const LoadMoreButton = (props) => {
  const {bgColor, textColor, loadMoreFunc} = props;
  return (
    <Button
      bgcolor={bgColor}
      textcolor={textColor}
      onClick={() => loadMoreFunc()}>
      {props.children}
    </Button>
  );
};

LoadMoreButton.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  loadMoreFunc: PropTypes.func.isRequired
}

LoadMoreButton.defaultProps = {
  bgColor: '#000',
  textColor: '#fff'
}

export default LoadMoreButton;
