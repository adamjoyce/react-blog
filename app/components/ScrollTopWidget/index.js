import React from 'react';
import PropTypes from 'prop-types';

import {ScrollButton, Widget} from './style';

/**
 * A widget for returning to the top of the page when scrolled down.
 */
class ScrollTopWidget extends React.Component {
  /**
   * Component constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.visibilityThreshold = this.visibilityThreshold.bind(this);
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  /**
   * Invoked immediately after the component loads.
   */
  componentDidMount() {
    // Called once on mount to hide any 'left-over' widgets from the previous
    // routes.
    this.visibilityThreshold();
    window.addEventListener('scroll', this.visibilityThreshold);
  }

  /**
   * Invoked immediately before the component is unloaded.
   */
  componentWillUnmount() {
    // Clean up event listeners.
    window.removeEventListener('scroll', this.visibilityThreshold);
  }

  /**
   * Invoked immediately after the component updates.
   */
  componentDidUpdate(prevProps) {
    const {pageChanged,
           pageChangedFunc,
           scrolledHeight} = this.props;
    const {visible} = this.state;

    // Page change.
    if (pageChanged && pageChanged !== prevProps.pageChanged) {
      // The page has just changed so jump to top of page.
      window.scrollTo(0, 0);
      pageChangedFunc(false);
    }

    // Fades out the widget have a route change.
    if (scrolledHeight === 0 && visible) {
      this.setState(() => ({visible: false}));
    }
  }

  /**
   * Event listener to toggle visibility of widget once scrolled past a certain
   * point.
   */
  visibilityThreshold() {
    const {windowHeight, scrolledHeight} = this.props;
    const {visible} = this.state;
    if (!visible) {
      if (scrolledHeight >= windowHeight) {
        this.setState(() => ({visible: true}));
      }
    }
    else {
      if (scrolledHeight < windowHeight) {
        this.setState(() => ({visible: false}));
      }
    }
  }

  /**
   * Smoothly animates a scroll to the top of the page.
   * NOTE: You can fight against the scroll in some browsers - might be worth
   * disabling the ability to scroll until after the animation...
   */
  smoothScroll() {
    const currentScroll = window.scrollY;
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
    const {visible} = this.state;
    const heightsSet = (windowHeight > 0) && (scrolledHeight > 0);
    console.log({windowHeight});
    console.log({scrolledHeight});
    console.log({visible});

    return (
      <ScrollButton
        visible={visible}
        onClick={() => this.smoothScroll()}>
        <Widget>
          <i className="fas fa-chevron-up"></i>
        </Widget>
      </ScrollButton>
    );
  }
}

ScrollTopWidget.propTypes = {
  windowHeight: PropTypes.number.isRequired,
  scrolledHeight: PropTypes.number.isRequired,
  pageChanged: PropTypes.bool.isRequired,
  pageChangedFunc: PropTypes.func.isRequired
}

export default ScrollTopWidget;
