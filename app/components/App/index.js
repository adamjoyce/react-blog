import React from 'react';
import {ThemeProvider} from 'styled-components';

import {PageWrapper} from './style';
// import {NavOverlay} from '../Navigation/style';

import {themeMain as theme} from '../../styles/themes';
import baseStyles from '../../styles/baseStyles';
import {getPosts} from '../../utils/api';
import {reduceLuminosity} from '../../utils/helpers';

import LandingHeader from '../LandingHeader';
import PostList from '../PostList';
import NavOverlay from '../NavOverlay';

/**
 * Wrapper class for the entire application.
 */
class App extends React.Component {
  /**
   * App conostructor.
   */
   constructor(props) {
     super(props);
     this.state = {
       posts: {},
       overlayOpen: false
     }
     this.toggleOverlayOpen = this.toggleOverlayOpen.bind(this);
   }

  /**
   * Invoked immediately after the application is loaded.
   */
  async componentDidMount() {
    baseStyles(theme);

    // Grab the posts from our wordpress site.
    const posts = await getPosts();
    this.setState(() => posts);
  }

  /**
   * Toggle state indicating if the nav overlay is open and the page should be
   * scaled down.
   */
  toggleOverlayOpen() {
    this.setState(() => ({overlayOpen: !this.state.overlayOpen}));
  }

  /**
   * Renders the component.
   */
  render() {
    const {posts, overlayOpen} = this.state;
    console.log(posts);

    return (
      posts.length > 0
        ? <ThemeProvider theme={theme}>
            <React.Fragment>
              <PageWrapper overlayOpen={overlayOpen}>
                <LandingHeader
                  featuredPost={posts[0]}
                  toggleOverlayFunc={this.toggleOverlayOpen}
                  theme={theme}>
                </LandingHeader>
                <PostList posts={posts}></PostList>
              </PageWrapper>
              <NavOverlay
                overlayOpen={overlayOpen}
                toggleOverlayFunc={this.toggleOverlayOpen}>
              </NavOverlay>
            </React.Fragment>
          </ThemeProvider>
        : null
    );
  }
}

export default App;
