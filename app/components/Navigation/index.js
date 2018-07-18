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
      navClicked: false
    }
    this.handleClick = this.handleClick.bind(this);
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
    const {navClicked} = this.state;

    return (
      <React.Fragment>
        <NavBar style={{opacity: opacity}}>
          <NavButton
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
  toggleOverlayFunc: PropTypes.func.isRequired
}

export default Navigation;
