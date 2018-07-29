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
                <h2>{post.title.rendered.toUpperCase()}</h2>
                {/* Hard-coded author to avoid having to authenticate. */}
                <h3>
                  by Adam Joyce / {/*
                  */}{post.categories.name} / {/*
                  */}{formatDate(post.date)}
                </h3>
                <div
                  dangerouslySetInnerHTML=
                    {{ __html: stripDangerousHTML(
                      post.content.rendered).innerHTML
                    }}
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
