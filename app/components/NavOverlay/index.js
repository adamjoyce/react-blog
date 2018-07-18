import React from 'react';
import PropTypes from 'prop-types';

import {Overlay, CloseButton} from './style';

import NavMenu from '../NavMenu';

/**
 * Navigation overlay for smaller screens.
 */
const NavOverlay = (props) => (
  <Overlay overlayOpen={props.overlayOpen}>
    <CloseButton
      onClick={() => props.toggleOverlayFunc()}>
      X
    </CloseButton>
    <NavMenu></NavMenu>
  </Overlay>
);

NavOverlay.propTypes = {
  overlayOpen: PropTypes.bool.isRequired,
  toggleOverlayFunc: PropTypes.func.isRequired
}

export default NavOverlay;
