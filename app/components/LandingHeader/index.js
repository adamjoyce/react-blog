import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {LandingWrapper} from './style';
// import {formatDate} from '../../utils/helpers';

import FeaturedPost from '../FeaturedPost';
// import Button from '../Button';

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
     // this.state = {
     //   height: '',
     //   scrollHeight: '',
     //   scrollIncrement: 20
     // }
     // this.updateWindowHeight = this.updateWindowHeight.bind(this);
     // this.scrollListener = this.scrollListener.bind(this);
   }

  /**
   * Invoked immediately after the component is loaded.
   */
   // componentDidMount() {
   //   // this.updateWindowHeight();
   //   // console.log(this.myRef.current);
   //   //
   //   // Binds resize event in order to recalculate window height.
   //   window.addEventListener('resize', this.updateWindowHeight);
   //
   //   // Bind scroll event listener for header fade.
   //   window.addEventListener('scroll', this.scrollListener);
   // }

   /**
    * Called when the component is being removed from the DOM.
    */
   // componentWillUnmount() {
   //   // Clean up event listeners.
   //   window.removeEventListener ('resize', this.updateWindowHeight);
   //   window.removeEventListener('scroll', this.scrollListener);
   // }

   /**
    * Calculates and sets the window height state.
    */
    // updateWindowHeight() {
    //   const height = window.innerHeight;
    //   this.setState(() => ({height}));
    // }

   /**
    * Event listener for tracking the page scroll height to control fade.
    */
   // scrollListener() {
   //   const {scrollHeight, scrollIncrement} = this.state;
   //   const nextScrollIncrement = Math.ceil(
   //     window.scrollY / scrollIncrement
   //   ) * scrollIncrement;
   //
   //   // Reduces the number of re-renders.
   //   if (scrollHeight != nextScrollIncrement) {
   //     this.setState(() => ({scrollHeight: nextScrollIncrement}));
   //   }
   // }

  /**
   * Renders the component.
   */
  render() {
    const {featuredPost} = this.props;
    // const {height, scrollHeight} = this.state;
    // const author = featuredPost.author;
    // const heightsInit = height && scrollHeight;
    // console.log({featuredPost});
    //
    // // Set the featured post's opacity based on the scroll height to produce
    // // the fade effect when scrolling down the page.
    // let postOpacity;
    // const halfHeight = height * 0.5;
    // if (heightsInit) {
    //   postOpacity = Math.max((halfHeight - scrollHeight) / halfHeight, 0);
    // }

    // Calculate the height for the featured post - using js due to
    // 100vh + iOS URL Bar + fixed div 'jumping' issue.

    return (
      <LandingWrapper>
        <FeaturedPost post={featuredPost}></FeaturedPost>
      </LandingWrapper>
    );
  }
}

LandingHeader.propTypes = {
  featuredPost: PropTypes.object.isRequired
}

export default LandingHeader;
