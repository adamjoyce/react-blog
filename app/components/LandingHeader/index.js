import React from 'react';
import PropTypes from 'prop-types';

import {
  LandingWrapper,
  FeaturedArticle,
  LandingOverlay,
  ReadOnButton
} from './style';

import {formatDate} from '../../utils/helpers';

/**
 * The full page header found on the blog landing page.
 * Highlights the most recent post.
 */
class LandingHeader extends React.Component {
  /**
   * LandingHeader constructor.
   */
   constructor(props) {
     super(props);
     this.state = {
       height: '',
       scrollHeight: '',
       scrollIncrement: 20
     }
     this.updateWindowHeight = this.updateWindowHeight.bind(this);
     this.scrollListener = this.scrollListener.bind(this);
   }

  /**
   * Invoked immediately after the component is loaded.
   */
   componentDidMount() {
     this.updateWindowHeight();

     // Binds resize event in order to recalculate window height.
     window.addEventListener('resize', this.updateWindowHeight);

     // Bind scroll event listener for header fade.
     window.addEventListener('scroll', this.scrollListener);
   }

   /**
    * Called when the component is being removed from the DOM.
    */
   componentWillUnmount() {
     // Clean up event listeners.
     window.removeEventListener ('resize', this.updateWindowHeight);
     window.removeEventListener('scroll', this.scrollListener);
   }

   /**
    * Calculates and sets the window height state.
    */
    updateWindowHeight() {
      const height = window.innerHeight;
      this.setState(() => ({height}));
    }

   /**
    * Event listener for tracking the page scroll height to control fade.
    */
   scrollListener() {
     const {scrollHeight, scrollIncrement} = this.state;
     const nextScrollIncrement = Math.ceil(
       document.documentElement.scrollTop / scrollIncrement
     ) * scrollIncrement;

     // Reduces the number of re-renders.
     if (scrollHeight != nextScrollIncrement) {
       this.setState(() => ({scrollHeight: nextScrollIncrement}));
     }
   }

  /**
   * Renders the component.
   */
  render() {
    const {featuredPost} = this.props;
    const {height, scrollHeight} = this.state;
    console.log({featuredPost});

    // Set the overlay opacity based on the scroll height to produce the fade
    // effect when scrolling down the page.
    let overlayOpacity;
    const halfHeight = height * 0.5;
    if (height && scrollHeight) {
      overlayOpacity = Math.min(
        1 - (halfHeight - scrollHeight) / halfHeight, 1
      );
      // console.log({scrollHeight});
      // console.log({overlayOpacity});
      // console.log({height});
      // console.log('---------------------------');
    }

    return (
      <LandingWrapper>
        <FeaturedArticle>
          <h1>{featuredPost.title}</h1>
          <h3>
            by {featuredPost.author.first_name} {featuredPost.author.last_name} / {/*
            */}{Object.keys(featuredPost.categories)[0]} / {/*
            */}{formatDate(featuredPost.date)}
          </h3>
          <ReadOnButton>Read On</ReadOnButton>
        </FeaturedArticle>
        {height && scrollHeight
          ? <LandingOverlay style={{opacity: overlayOpacity}}></LandingOverlay>
          : <LandingOverlay></LandingOverlay>}
      </LandingWrapper>
    );
  }
}

LandingHeader.propTypes = {
  featuredPost: PropTypes.object.isRequired
}

export default LandingHeader;
