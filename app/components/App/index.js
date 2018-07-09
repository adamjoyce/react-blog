import React from 'react';

import baseStyles from '../../styles/baseStyles';
import {HelloWorld} from './style';

/**
 * Wrapper class for the entire application.
 */
class App extends React.Component {
  /**
   * Invoked immediately after the component is mounted.
   */
  componentDidMount() {
    baseStyles();
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <HelloWorld>Hello World! x</HelloWorld>
    );
  }
}

export default App;
