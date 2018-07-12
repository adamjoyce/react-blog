import React from 'react';
import {ThemeProvider} from 'styled-components';

import {themeMain as theme} from '../../styles/themes';
import baseStyles from '../../styles/baseStyles';
import {getPosts} from '../../utils/api';
import {ArticleList} from './style';

import LandingHeader from '../LandingHeader';

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
       posts: {}
     }
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
   * Renders the component.
   */
  render() {
    const {posts} = this.state;
    console.log(posts);
    return (
      posts.length > 0
        ? <ThemeProvider theme={theme}>
            <React.Fragment>
              <LandingHeader featuredPost={posts[0]}></LandingHeader>
              <ArticleList></ArticleList>
            </React.Fragment>
          </ThemeProvider>
        : null
    );
  }
}

export default App;
