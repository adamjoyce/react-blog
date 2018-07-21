import React from 'react';
import PropTypes from 'prop-types';

import {ContentWrapper} from './style';

import Header from '../Header';

/**
 * A blog post page.
 */
const PostPage = (props) => {
  const {post, toggleOverlayFunc, headerHeightFunc, headerHeight} = props;
  return (
    <React.Fragment>
      <Header
        toggleOverlayFunc={toggleOverlayFunc}
        headerHeightFunc={headerHeightFunc}
      />
      {headerHeight > 0
        ? <ContentWrapper
            style={{top: headerHeight}}>
            {post.title}
          </ContentWrapper>
        : null}
    </React.Fragment>
  );
};

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
  toggleOverlayFunc: PropTypes.func.isRequired,
  headerHeightFunc: PropTypes.func.isRequired,
  headerHeight: PropTypes.number.isRequired
}

export default PostPage;
