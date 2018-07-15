import React from 'react';
import PropTypes from 'prop-types';

import {
  ListWrapper,
  ListTitle,
  Divider,
  Article
} from './style';

/**
 * A list containing a number of blog Articles.
 */
class ArticleList extends React.Component {
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
            <Article>
              <h2># {post.title}</h2>
              {post.excerpt}
            </Article>

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

ArticleList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default ArticleList;
