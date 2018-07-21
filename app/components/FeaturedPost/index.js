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
   }

   /**
    * Invoked immediately after the component is loaded.
    */
   componentDidMount() {
     const {windowHeight} = this.props;

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
          textColor={theme.colors.primary}
          bgColor={theme.colors.tertiary}
          text={"Read On"}
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
