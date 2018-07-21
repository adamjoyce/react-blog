import React from 'react';
import PropTypes from 'prop-types';

import {LandingWrapper} from './style';

import Navigation from '../Navigation';
import FeaturedPost from '../FeaturedPost';

/**
 * The full page header found on the blog landing page.
 * Highlights the most recent post.
 */
class LandingHeader extends React.Component {
  /**
   * Renders the component.
   */
  render() {
    const {featuredPost,
           toggleOverlayFunc,
           activePostFunc,
           windowHeight,
           scrolledHeight,
           theme} = this.props;
    const heightsSet = (windowHeight > 0) && (scrolledHeight > 0);

    // Calculate the opacity of the featured post and navigation menu for the
    // fade effect when the page is scrolled.
    let opacity = 1;
    if (heightsSet) {
      const maxFadeHeight = windowHeight * 0.8;
      opacity = Math.max((maxFadeHeight - scrolledHeight) / maxFadeHeight, 0);
    }

    return (
      <LandingWrapper>
        {windowHeight
          ? <React.Fragment>
              <Navigation
                opacity={opacity}
                toggleOverlayFunc={toggleOverlayFunc}>
              </Navigation>
              <FeaturedPost
                post={featuredPost}
                opacity={opacity}
                windowHeight={windowHeight}
                activePostFunc={activePostFunc}
                theme={theme}>
              </FeaturedPost>
            </React.Fragment>
          : null}
      </LandingWrapper>
    );
  }
}

LandingHeader.propTypes = {
  featuredPost: PropTypes.object.isRequired,
  activePostFunc: PropTypes.func.isRequired,
  toggleOverlayFunc: PropTypes.func.isRequired,
  scrolledHeight: PropTypes.number.isRequired
}

export default LandingHeader;
