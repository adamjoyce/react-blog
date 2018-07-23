import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {Wrapper} from './style';

/**
 * A wrapper component for the page.
 * This enables the scale effect with the nav overlay is open on smaller devices
 * as indicating the page (route) has just changed.
 */
class PageWrapper extends React.Component {
  /**
   * Invoked immediately after the component loads.
   */
  componentDidMount() {
    const {history, pageChangedFunc} = this.props;
    this.unlisten = history.listen((location, action) => {
      // Indicates the page has just changed.
      pageChangedFunc(true);
    });
  }

  /**
   * Invoked immediately before the component unmounts.
   */
  componentWillUnmount() {
    this.unlisten();
  }

  /**
   * Renders the component.
   */
  render() {
    const {overlayOpen} = this.props;
    return (
      <Wrapper overlayOpen={overlayOpen}>{this.props.children}</Wrapper>
    );
  }
}

PageWrapper.propTypes = {
  overlayOpen: PropTypes.bool.isRequired,
  pageChangedFunc: PropTypes.func.isRequired
}

export default withRouter(PageWrapper);
