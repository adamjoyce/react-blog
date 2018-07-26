import React from 'react';
import PropTypes from 'prop-types';

import {ContentWrapper, Post} from './style';
import {formatDate, stripDangerousHTML} from '../../utils/helpers';

import Header from '../Header';

/**
 * A blog post page.
 */
class PostPage extends React.Component {
  componentDidMount() {
    const {post, getPostFromURLFunc, match} = this.props;
    if (Object.keys(post).length === 0) {
      getPostFromURLFunc(match.params.postSlug);
    }
  }

  /**
   * Render the component.
   */
  render() {
    const {
      post,
      toggleOverlayFunc,
      headerHeightFunc,
      headerHeight,
      match
    } = this.props;
    const author = post.author;
    console.log({post});
    console.log({headerHeight});
    console.log({match});

    return (
      <React.Fragment>
        <Header
          toggleOverlayFunc={toggleOverlayFunc}
          headerHeightFunc={headerHeightFunc}
        />
        {headerHeight > 0 && Object.keys(post).length > 0
          ? <ContentWrapper
              style={{top: headerHeight}}>
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
              </Post>
            </ContentWrapper>
          : null}
      </React.Fragment>
    );
  }
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
  getPostFromURLFunc: PropTypes.func.isRequired,
  toggleOverlayFunc: PropTypes.func.isRequired,
  headerHeightFunc: PropTypes.func.isRequired,
  headerHeight: PropTypes.number.isRequired
}

export default PostPage;
