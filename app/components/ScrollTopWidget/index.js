import React from 'react';
import PropTypes from 'prop-types';

import {Widget, Button} from './style';

/**
 * A widget for returning to the top of the page when scrolled down.
 */
class ScrollTopWidget extends React.Component {
  /**
   * Component constructor.
   */
  constructor(props) {
    super(props);
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  /**
   * Smoothly animates a scroll to the top of the page.
   * NOTE: You can fight against the scroll in some browsers - might be worth
   * disabling the ability to scroll until after the animation...
   */
  smoothScroll() {
    const currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(this.smoothScroll);
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  }

  /**
   * Renders the component.
   */
  render() {
    const {windowHeight, scrolledHeight} = this.props;
    const heightsSet = (windowHeight > 0) && (scrolledHeight > 0);

    // Calculate the opacity for the the scroll to top button.
    // Becomes visible once the page is sufficiently scrolled and the navigation
    // icon is no longer available.
    let opacity = 0;
    if (heightsSet) {
      opacity =
        Math.min((1 - (windowHeight - scrolledHeight) / windowHeight) - 1, 1);
    }

    return (
      <Widget style={{opacity: opacity}}>
        <Button
          onClick={() => this.smoothScroll()}>
          <i className="fas fa-chevron-up"></i>
        </Button>
      </Widget>
    );
  }
}

ScrollTopWidget.propTypes = {
  windowHeight: PropTypes.number.isRequired,
  scrolledHeight: PropTypes.number.isRequired
}

export default ScrollTopWidget;
