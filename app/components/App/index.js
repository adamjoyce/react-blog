import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import urls from '../../nav/urls';
import {themeMain as theme} from '../../styles/themes';
import baseStyles from '../../styles/baseStyles';
import {getPosts} from '../../utils/api';
import {reduceLuminosity} from '../../utils/helpers';

import PageWrapper from '../PageWrapper';
import LandingPage from '../LandingPage';
import AboutPage from '../AboutPage';
import PostPage from '../PostPage';
import ScrollTopWidget from '../ScrollTopWidget';
import NavOverlay from '../NavOverlay';
import NotFound from '../NotFound';

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
       postsPerPage: 10,
       overlayOpen: false,
       pageChanged: false
     }
     this.toggleOverlayOpen = this.toggleOverlayOpen.bind(this);
     this.updateWindowHeight = this.updateWindowHeight.bind(this);
     this.scrollListener = this.scrollListener.bind(this);
     this.setHeaderHeight = this.setHeaderHeight.bind(this);
     this.setActivePost = this.setActivePost.bind(this);
     this.determinePostFromSlug = this.determinePostFromSlug.bind(this);
     this.setPageChanged = this.setPageChanged.bind(this);
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
   * @param {number} The height of the header in pixels.
   */
  setHeaderHeight(headerHeight) {
    this.setState(() => ({headerHeight}));
  }

  /**
   * Sets the active post signalling that the user wants to read that post.
   * @param {object} The new post to be set as active.
   */
  setActivePost(activePost) {
    this.setState(() => ({activePost}));
  }

  /**
   * Sets the active post based on the URL slug for when users navigate directly
   * to the post page.
   * @param {string} The post slug.
   */
  determinePostFromSlug(slug) {
    const {posts} = this.state;
    for (let i = 0; i < posts.length; ++i) {
      if (posts[i].slug === slug) {
        this.setState(() => ({activePost: posts[i]}));
        break;
      }
    }
  }

  /**
   * Sets the state value indicating if a page change has just occured.
   * @param {bool} The boolean value to be set at the pageChanged state.
   */
   setPageChanged(pageChanged) {
     this.setState(() => ({pageChanged}));
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
           postsPerPage,
           overlayOpen,
           pageChanged} = this.state;
    // console.log({activePost});
    // console.log(posts);
    // console.log({windowHeight});
    // console.log({scrolledHeight});
    // console.log({pageChanged});

    return (
      posts.length > 0
        ? <Router>
            <ThemeProvider theme={theme}>
              <React.Fragment>
                <PageWrapper
                  overlayOpen={overlayOpen}
                  pageChangedFunc={this.setPageChanged}>
                  <Switch>
                    {/* Landing Page */}
                    <Route exact path={urls.home} render={() =>
                      <LandingPage
                        posts={posts.slice(0, postsPerPage)}
                        activePostFunc={this.setActivePost}
                        toggleOverlayFunc={this.toggleOverlayOpen}
                        windowHeight={windowHeight}
                        scrolledHeight={scrolledHeight}
                        theme={theme}
                      />
                    } />
                    {/* About Page */}
                    <Route exact path={urls.about} render={() =>
                      <AboutPage
                        toggleOverlayFunc={this.toggleOverlayOpen}
                        headerHeightFunc={this.setHeaderHeight}
                        headerHeight={headerHeight}
                      />
                    } />
                    {/* A Post Page */}
                    <Route
                      exact
                      path={`${urls.post}/:postSlug`}
                      render={({match}) =>
                        <PostPage
                          post={activePost}
                          getPostFromURLFunc={this.determinePostFromSlug}
                          toggleOverlayFunc={this.toggleOverlayOpen}
                          headerHeightFunc={this.setHeaderHeight}
                          headerHeight={headerHeight}
                          match={match}
                        />
                      }
                    />
                    {/* 404 Page */}
                    <Route
                      render={() =>
                        <NotFound theme={theme} />
                      }
                    />
                  </Switch>
                  {/* ^ Widget */}
                  <ScrollTopWidget
                    activePost={activePost}
                    windowHeight={windowHeight}
                    scrolledHeight={scrolledHeight}
                    pageChanged={pageChanged}
                    pageChangedFunc={this.setPageChanged}
                  />
                </PageWrapper>
                {/* Small Screen Nav Overlay */}
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
