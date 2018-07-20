import React from 'react';
import PropTypes from 'prop-types';

import {NavBar, NavButton} from './style';

/**
 * The primary navigation component found at the top of each page in the header.
 */
class Navigation extends React.Component {
  /**
   * Component constructor.
   */
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      navClicked: false
    }
    this.navRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Invoked immediately after the component is loaded.
   */
  componentDidMount() {
    const {headerHeightFunc} = this.props;
    if (headerHeightFunc) {
      // The component is a non-landing page so calculate starting height for
      // preceeding section.
      const height = this.navRef.current.clientHeight;
      headerHeightFunc(height);
      this.setState(() => ({height}));
    }
  }

  /**
   * Fired when the nav hamburger button is clicked.
   */
  handleClick() {
    this.setState(() => ({navClicked: !this.state.navClicked}));
    this.props.toggleOverlayFunc();
  }

  render() {
    const {opacity} = this.props;
    const {height, navClicked} = this.state;

    return (
      <React.Fragment>
        <NavBar style={{opacity: opacity}}>
          <NavButton
            innerRef={this.navRef}
            onClick={() => this.handleClick()}>
            <i className="fas fa-bars"></i>
          </NavButton>
        </NavBar>
      </React.Fragment>
    );
  }
}

Navigation.propTypes = {
  opacity: PropTypes.number.isRequired,
  toggleOverlayFunc: PropTypes.func.isRequired,
  headerHeightFunc: PropTypes.func
}

export default Navigation;
