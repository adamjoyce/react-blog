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
   * Component constructor.
   */
   constructor(props) {
     super(props);
     this.state = {
       windowHeight: '',
       scrolledHeight: '',
       scrolledIncrement: 20
     }
     this.updateWindowHeight = this.updateWindowHeight.bind(this);
     this.scrollListener = this.scrollListener.bind(this);
   }

   /**
    * Invoked immediately after the component is loaded.
    */
   componentDidMount() {
     this.updateWindowHeight();

     // Set up event listeners for scrolling fade and page resizing.
     window.addEventListener('scroll', this.scrollListener);
     window.addEventListener('resize', this.updateWindowHeight);
   }

   /**
    * Calculates and sets the window height state.
    */
   updateWindowHeight() {
     const windowHeight = window.innerHeight;
     this.setState(() => ({windowHeight}));
   }

   /**
    * Event listener for tracking the page scroll height to control post
    * fade-out.
    */
   scrollListener() {
     const {scrolledHeight, scrolledIncrement} = this.state;
     const nextScrolledIncrement = Math.ceil(
       window.scrollY / scrolledIncrement
     ) * scrolledIncrement;

     // Reduces the number of re-renders.
     if (scrolledHeight != nextScrolledIncrement) {
       this.setState(() => ({scrolledHeight: nextScrolledIncrement}));
     }
   }

  /**
   * Renders the component.
   */
  render() {
    const {featuredPost, toggleOverlayFunc, theme} = this.props;
    const {windowHeight, scrolledHeight} = this.state;
    const heightsSet = windowHeight && scrolledHeight;

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
  toggleOverlayFunc: PropTypes.func.isRequired
}

export default LandingHeader;
