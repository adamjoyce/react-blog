import React from 'react';

import {NavList, NavItem} from './style';

/**
 * A list of navigation items for site traversal.
 */
const NavMenu = () => (
  <NavList>
    <NavItem><a href="/">Home</a></NavItem>
    <NavItem><a href="/">About</a></NavItem>
  </NavList>
);

export default NavMenu;
