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
import ScrollTopWidget from '../ScrollTopWidget';
import NavOverlay from '../NavOverlay';

/**
 * Wrapper class for the entire application.
 */
class App extends React.Component {
  /**
   * App constructor.
   */
   constructor(props) {
     super(props);
     this.state = {
       posts: {},
       windowHeight: 0,
       scrolledHeight: 0,
       scrolledIncrement: 20,
       overlayOpen: false
     }
     this.toggleOverlayOpen = this.toggleOverlayOpen.bind(this);
     this.updateWindowHeight = this.updateWindowHeight.bind(this);
     this.scrollListener = this.scrollListener.bind(this);
   }

  /**
   * Invoked immediately after the application is loaded.
   */
  async componentDidMount() {
    baseStyles(theme);

    // Grab the posts from our wordpress site.
    const posts = await getPosts();
    this.setState(() => posts);

    this.updateWindowHeight();

    // Set up event listener for calculating the current scroll height.
    window.addEventListener('resize', this.updateWindowHeight);
    window.addEventListener('scroll', this.scrollListener);
  }

  /**
   * Invoked immediately before component is unmounted.
   */
  componentWillUnmount() {
    // Clean up the active event listeners.
    window.removeEventListener('resize', this.updateWindowHeight);
    window.removeEventListener('scroll', this.scrollListener);
  }

  /**
   * Calculates and sets the window height state.
   */
  updateWindowHeight() {
    const windowHeight = window.innerHeight;
    this.setState(() => ({windowHeight}));
  }

  /**
   * Event listener for tracking the page scroll height to control post
   * fade-out.
   */
  scrollListener() {
    const {scrolledHeight, scrolledIncrement} = this.state;
    const nextScrolledIncrement = Math.ceil(
      window.scrollY / scrolledIncrement
    ) * scrolledIncrement;

    // Reduces the number of re-renders.
    if (scrolledHeight != nextScrolledIncrement) {
      this.setState(() => ({scrolledHeight: nextScrolledIncrement}));
    }
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
    const {posts, windowHeight, scrolledHeight, overlayOpen} = this.state;
    // console.log(posts);
    // console.log({windowHeight});
    // console.log({scrolledHeight});

    return (
      posts.length > 0
        ? <ThemeProvider theme={theme}>
            <React.Fragment>
              <PageWrapper overlayOpen={overlayOpen}>
                <LandingHeader
                  featuredPost={posts[0]}
                  toggleOverlayFunc={this.toggleOverlayOpen}
                  windowHeight={windowHeight}
                  scrolledHeight={scrolledHeight}
                  theme={theme}>
                </LandingHeader>
                <PostList posts={posts}></PostList>
                <ScrollTopWidget
                  windowHeight={windowHeight}
                  scrolledHeight={scrolledHeight}>
                </ScrollTopWidget>
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
