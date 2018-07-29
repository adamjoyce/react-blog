import React from 'react';
import PropTypes from 'prop-types';

import {ListWrapper, ListTitle, LoadWrapper} from './style';
import {chunkArray} from '../../utils/helpers';

import Posts from '../Posts';
import LoadMoreButton from '../LoadMoreButton';

/**
 * A list containing a number of blog posts.
 */
class PostList extends React.Component {
  /**
   * Component constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      chunkedPosts: [],
      visiblePosts: [],
      noVisibleChunks: 1
    }
    this.loadMorePosts = this.loadMorePosts.bind(this);
  }

  /**
   * Invoked immediately after the component is mounts.
   */
  componentDidMount() {
    const {posts} = this.props;
    const chunkedPosts = chunkArray(posts, 10);
    const visiblePosts = chunkedPosts[0];
    this.setState(() => ({chunkedPosts, visiblePosts}));
  }

  /**
   * Add more posts to be displayed if available.
   */
  loadMorePosts() {
    const {chunkedPosts, visiblePosts, noVisibleChunks} = this.state;

    const posts = visiblePosts.concat(chunkedPosts[noVisibleChunks]);

    const newVisibleCount = noVisibleChunks + 1;
    this.setState(() => ({
      visiblePosts: posts,
      noVisibleChunks: newVisibleCount
    }));
  }

  /**
   * Renders the component.
   */
  render() {
    const {posts, categories, activePostFunc} = this.props;
    const {chunkedPosts, visiblePosts, noVisibleChunks} = this.state;
    console.log({chunkedPosts});
    console.log({visiblePosts});
    console.log({noVisibleChunks});

    return (
      <ListWrapper>
        <ListTitle>{`Latest Stories`.toUpperCase()}</ListTitle>
        {visiblePosts.length > 0
          ? <Posts
              posts={visiblePosts}
              activePostFunc={activePostFunc}
              remainingChunks={chunkedPosts.length - noVisibleChunks}
            />
          : null}
        {/* Show the load more button if more posts remain. */}
        {noVisibleChunks < chunkedPosts.length
          ? <LoadWrapper>
              <LoadMoreButton
                loadMoreFunc={this.loadMorePosts}>
                Load More
              </LoadMoreButton>
            </LoadWrapper>
          : null}
      </ListWrapper>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  activePostFunc: PropTypes.func.isRequired
}

export default PostList;
