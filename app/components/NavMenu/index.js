import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import urls from '../../nav/urls';
import {NavList, NavItem} from './style';

/**
 * A list of navigation items for site traversal.
 */
const NavMenu = (props) => (
  <NavList>
    <NavItem>
      <Link
        to={urls.home}
        onClick={() => props.toggleOverlayFunc()}>
        Home
      </Link>
    </NavItem>
    <NavItem>
      <Link
        to={urls.about}
        onClick={() => props.toggleOverlayFunc()}>
        About
      </Link>
    </NavItem>
  </NavList>
);

NavMenu.propTypes = {
  toggleOverlayFunc: PropTypes.func.isRequired
}

export default NavMenu;
