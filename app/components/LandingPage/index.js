import React from 'react';
import PropTypes from 'prop-types';

import LandingHeader from '../LandingHeader';
import PostList from '../PostList';

/**
 * The landing page component.
 * Consists of the landing header and post list.
 */
const LandingPage = (props) => {
  const {posts,
         activePostFunc,
         toggleOverlayFunc,
         windowHeight,
         scrolledHeight,
         theme} = props;

  return (
    <React.Fragment>
      <LandingHeader
        featuredPost={posts[0]}
        activePostFunc={activePostFunc}
        toggleOverlayFunc={toggleOverlayFunc}
        windowHeight={windowHeight}
        scrolledHeight={scrolledHeight}
        theme={theme}>
      </LandingHeader>
      <PostList posts={posts} activePostFunc={activePostFunc} />
    </React.Fragment>
  );
};

LandingPage.propTypes = {
  posts: PropTypes.array.isRequired,
  activePostFunc: PropTypes.func.isRequired,
  toggleOverlayFunc: PropTypes.func.isRequired,
  windowHeight: PropTypes.number.isRequired,
  scrolledHeight: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
}

export default LandingPage;
