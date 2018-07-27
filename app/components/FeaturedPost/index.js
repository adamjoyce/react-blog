import React from 'react';
import PropTypes from 'prop-types';

import {PostWrapper} from './style';
import {formatDate} from '../../utils/helpers';

import ReadOnButton from '../ReadOnButton';

class FeaturedPost extends React.Component {
  /**
   * Component constructor.
   */
   constructor(props) {
     super(props);
     this.postRef = React.createRef();
     this.centerPost = this.centerPost.bind(this);
   }

   /**
    * Invoked immediately after the component is loaded.
    */
   componentDidMount() {
     const {windowHeight} = this.props;

     // Set the initial position of featured post to avoid 'jumping' issues
     // in mobile browsers when combining position: fixed + vh + URL bar
     // shrinking.
     this.centerPost(this.postRef.current, windowHeight);
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

   centerPost(postDOMNode, windowHeight) {
     const postPosition = (windowHeight * 0.5) - (postDOMNode.clientHeight * 0.5);
     postDOMNode.style.top = `${postPosition}px`;
   }

  /**
   * Renders the component.
   */
  render() {
    const {post, windowHeight, opacity, activePostFunc, theme} = this.props;
    const author = post.author;

    return (
      <PostWrapper
        style={{opacity: opacity}}
        innerRef={this.postRef}>
        <h1>{post.title.toUpperCase()}</h1>
        <h3>
          by {author.first_name} {author.last_name} / {/*
          */}{Object.keys(post.categories)[0]} / {/*
          */}{formatDate(post.date)}
        </h3>
        <ReadOnButton
          bgColor={theme.colors.tertiary}
          textColor={theme.colors.primary}
          post={post}
          activePostFunc={activePostFunc}
        />
      </PostWrapper>
    );
  }
}

FeaturedPost.propTypes = {
  post: PropTypes.object.isRequired,
  windowHeight: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  activePostFunc: PropTypes.func.isRequired
}

export default FeaturedPost;
