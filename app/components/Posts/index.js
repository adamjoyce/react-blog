import React from 'react';
import PropTypes from 'prop-types';

import {Post, Divider} from './style';
import {formatDate, stripDangerousHTML} from '../../utils/helpers';

import ReadOnButton from '../ReadOnButton';

/**
 * A collection of posts.
 */
const Posts = (props) => {
  const {posts, activePostFunc, remainingChunks} = props;

  return (
    posts.map((post, index) => {
      const title = post.title.rendered;
      const excerpt = post.excerpt.rendered;

      return (
        <React.Fragment key={title}>
          {/* Add a divider at the top of the list of posts. */}
          {index === 0 ? <Divider /> : null}
          <Post>
            <h2>{title.toUpperCase()}</h2>
            {/* Hard-coded author to avoid having to authenticate. */}
            <h3>
              by Adam Joyce / {/*
              */}{post.categories.name} / {/*
              */}{formatDate(post.date)}
            </h3>
            <div
              dangerouslySetInnerHTML=
                {{ __html: stripDangerousHTML(excerpt).innerHTML}}
            />
            <ReadOnButton
              post={post}
              activePostFunc={activePostFunc}
            />
          </Post>
          {remainingChunks != 0 ? <Divider /> : null}
        </React.Fragment>
      );
    }));
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  activePostFunc: PropTypes.func.isRequired,
  remainingChunks: PropTypes.number.isRequired
}

export default Posts;
