import React from 'react';
import PropTypes from 'prop-types';

import {ListWrapper, ListTitle} from './style';
import {chunkArray} from '../../utils/helpers';

import Posts from '../Posts';

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
      chunkedPosts: []
    }
  }

  /**
   * Invoked immediately after the component is mounts.
   */
  componentDidMount() {
    const {posts} = this.props;
    const chunkedPosts = chunkArray(posts, 10);
    this.setState(() => ({chunkedPosts}));
  }

  /**
   * Renders the component.
   */
  render() {
    const {posts, categories, activePostFunc} = this.props;
    const {chunkedPosts} = this.state;
    console.log(chunkedPosts);

    return (
      <ListWrapper>
        <ListTitle>{`Latest Stories`.toUpperCase()}</ListTitle>
        <Posts
          posts={posts}
          activePostFunc={activePostFunc}
        />
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
