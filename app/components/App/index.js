import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {PageWrapper} from './style';

import urls from '../../nav/urls';
import {themeMain as theme} from '../../styles/themes';
import baseStyles from '../../styles/baseStyles';
import {getPosts} from '../../utils/api';
import {reduceLuminosity} from '../../utils/helpers';

import LandingPage from '../LandingPage';
import AboutPage from '../AboutPage';
import PostPage from '../PostPage';
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
       activePost: {},
       windowHeight: 0,
       scrolledHeight: 0,
       scrolledIncrement: 20,
       headerHeight: 0,
       overlayOpen: false
     }
     this.toggleOverlayOpen = this.toggleOverlayOpen.bind(this);
     this.updateWindowHeight = this.updateWindowHeight.bind(this);
     this.scrollListener = this.scrollListener.bind(this);
     this.setHeaderHeight = this.setHeaderHeight.bind(this);
     this.setActivePost = this.setActivePost.bind(this);
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
   * Sets the non-landing header height in pixels to allow for correct
   * placement of the preceeding post / section.
   */
  setHeaderHeight(headerHeight) {
    this.setState(() => ({headerHeight}));
  }

  /**
   * Sets the active post signalling that the user wants to read that post.
   */
  setActivePost(activePost) {
    this.setState(() => ({activePost}));
  }

  /**
   * Renders the component.
   */
  render() {
    const {posts,
           activePost,
           windowHeight,
           scrolledHeight,
           headerHeight,
           overlayOpen} = this.state;
    console.log({activePost});
    // console.log(posts);
    // console.log({windowHeight});
    // console.log({scrolledHeight});

    return (
      posts.length > 0
        ? <Router>
            <ThemeProvider theme={theme}>
              <React.Fragment>
                <PageWrapper overlayOpen={overlayOpen}>
                  <Route exact path={urls.home} render={() =>
                    <LandingPage
                      posts={posts}
                      activePostFunc={this.setActivePost}
                      toggleOverlayFunc={this.toggleOverlayOpen}
                      windowHeight={windowHeight}
                      scrolledHeight={scrolledHeight}
                      theme={theme}
                    />
                  } />
                  <Route exact path={urls.about} render={() =>
                    <AboutPage
                      toggleOverlayFunc={this.toggleOverlayOpen}
                      headerHeightFunc={this.setHeaderHeight}
                      headerHeight={headerHeight}
                    />
                  } />
                  <Route path={urls.post} render={() =>
                    <PostPage
                      post={activePost}
                      toggleOverlayFunc={this.toggleOverlayOpen}
                      headerHeightFunc={this.setHeaderHeight}
                      headerHeight={headerHeight}
                    />
                  } />
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
          </Router>
        : null
    );
  }
}

export default App;
