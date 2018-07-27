import React from 'react';
import PropTypes from 'prop-types';

import {
  ListWrapper,
  ListTitle,
  Divider,
  Post
} from './style';
import {formatDate, stripDangerousHTML} from '../../utils/helpers';

import ReadOnButton from '../ReadOnButton';

/**
 * A list containing a number of blog posts.
 */
class PostList extends React.Component {
  /**
   * Renders the component.
   */
  render() {
    const {posts, activePostFunc} = this.props;
    const lastPost = posts.length - 1;

    return (
      <ListWrapper>
        <ListTitle>{`Latest Stories`.toUpperCase()}</ListTitle>
        <Divider />
        {posts.map((post, index) => {
          // Skip the most recent store which will be the featured post.
          if (index > 0) {
            const author = post.author;
            return (
              <React.Fragment
                key={post.title}>
                <Post>
                  <h2>{post.title.toUpperCase()}</h2>
                  <h3>
                    by {author.first_name} {author.last_name} / {/*
                    */}{Object.keys(post.categories)[0]} / {/*
                    */}{formatDate(post.date)}
                  </h3>
                  <div
                    dangerouslySetInnerHTML=
                      {{ __html: stripDangerousHTML(post.excerpt).innerHTML}}
                  />
                  <ReadOnButton
                    post={post}
                    activePostFunc={activePostFunc}
                  />
                </Post>

                <Divider />
                {/* Don't render a divider below the last post. */}
                {/* {index !== lastPost
                  ? <Divider />
                  : null} */}
              </React.Fragment>
            );
          }
        })}
      </ListWrapper>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  activePostFunc: PropTypes.func.isRequired
}

export default PostList;
