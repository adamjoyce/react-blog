import React from 'react';

import {Widget, Button} from './style';

/**
 * A widget for returning to the top of the page when scrolled down.
 */
class ScrollTopWidget extends React.Component {
  componentDidMount() {
    
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <Widget>
        <Button><i className="fas fa-chevron-up"></i></Button>
      </Widget>
    );
  }
}

export default ScrollTopWidget;
