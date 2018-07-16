import React from 'react';
import PropTypes from 'prop-types';

import {PostWrapper} from './style';
import {formatDate} from '../../utils/helpers';

import Button from '../Button';

class FeaturedPost extends React.Component {
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
     this.postRef = React.createRef();
     this.updateWindowHeight = this.updateWindowHeight.bind(this);
     this.scrollListener = this.scrollListener.bind(this);
   }

   /**
    * Invoked immediately after the component is loaded.
    */
   componentDidMount() {
     const windowHeight = this.updateWindowHeight();

     // Set up event listeners for scrolling fade and page resizing.
     window.addEventListener('scroll', this.scrollListener);
     window.addEventListener('resize', this.updateWindowHeight);

     // Set the initial position of featured post to avoid 'jumping' issues
     // in mobile browsers when combining position: fixed + vh + URL bar
     // shrinking.
     const postPosition =
       (windowHeight * 0.5) - (this.postRef.current.clientHeight * 0.5);
     this.postRef.current.style.top = `${postPosition}px`;
   }

  /**
   * Calculates and sets the window height state.
   * @returns {number} The height of the window in pixels.
   */
   updateWindowHeight() {
     const windowHeight = window.innerHeight;
     this.setState(() => ({windowHeight}));
     return windowHeight;
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
    const {post} = this.props;
    const {windowHeight, scrolledHeight} = this.state;
    const heightsSet = windowHeight && scrolledHeight;
    const author = post.author;
    console.log({post});

    // Set the featured post's opacity based on the scroll height to produce
    // the fade effect when scrolling down the page.
    let postOpacity = 1;
    if (heightsSet) {
      const maxFadeHeight = windowHeight * 0.8;
      postOpacity =
        Math.max((maxFadeHeight - scrolledHeight) / maxFadeHeight, 0);
    }

    return (
      <PostWrapper
        style={{opacity: postOpacity}}
        innerRef={this.postRef}>
        <h1>{post.title.toUpperCase()}</h1>
        <h3>
          by {author.first_name} {author.last_name} / {/*
          */}{Object.keys(post.categories)[0]} / {/*
          */}{formatDate(post.date)}
        </h3>
        <Button text={'Read On'}></Button>
      </PostWrapper>
    );
  }
}

FeaturedPost.propTypes = {
  post: PropTypes.object.isRequired
}

export default FeaturedPost;
