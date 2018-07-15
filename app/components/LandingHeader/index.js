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
       window.scrollY / scrollIncrement
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
    const author = featuredPost.author;
    const heightsInit = height && scrollHeight;
    console.log({featuredPost});

    // Set the featured article's opacity based on the scroll height to produce
    // the fade effect when scrolling down the page.
    let articleOpacity;
    const halfHeight = height * 0.5;
    if (heightsInit) {
      articleOpacity = Math.max((halfHeight - scrollHeight) / halfHeight, 0);
    }

    return (
      <LandingWrapper 
        style={height ? {height: height} : null}>
          <FeaturedArticle
            style={heightsInit ? {opacity: articleOpacity} : null}>
            <h1>{featuredPost.title}</h1>
            <h3>
              by {author.first_name} {author.last_name} / {/*
              */}{Object.keys(featuredPost.categories)[0]} / {/*
              */}{formatDate(featuredPost.date)}
            </h3>
            <ReadOnButton>Read On</ReadOnButton>
          </FeaturedArticle>
      </LandingWrapper>
    );
  }
}

LandingHeader.propTypes = {
  featuredPost: PropTypes.object.isRequired
}

export default LandingHeader;
