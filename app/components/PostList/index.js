import React from 'react';
import PropTypes from 'prop-types';

import {
  ListWrapper,
  ListTitle,
  Divider,
  Post
} from './style';

/**
 * A list containing a number of blog posts.
 */
class PostList extends React.Component {
  /**
   * Renders the component.
   */
  render() {
    const {posts} = this.props;
    const lastPost = posts.length - 1;

    return (
      <ListWrapper>
        <ListTitle>Latest Stories</ListTitle>
        <Divider></Divider>
        {posts.map((post, index) => (
          <React.Fragment
            key={post.title}>
            <Post>
              <h2># {post.title}</h2>
              {post.excerpt}
            </Post>

            {/* Don't render a divider below the last post. */}
            {index !== lastPost
              ? <Divider></Divider>
              : null}
          </React.Fragment>
        ))}
      </ListWrapper>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList;
