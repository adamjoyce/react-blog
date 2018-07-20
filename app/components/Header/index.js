import React from 'react';
import PropTypes from 'prop-types';

import {HeaderWrapper} from './style';

import Navigation from '../Navigation';

/**
 * The page header for all pages excluding the landing page.
 */
 class Header extends React.Component {
   render() {
     const {toggleOverlayFunc, headerHeightFunc} = this.props;
     return (
       <HeaderWrapper>
         <Navigation
           opacity={1}
           toggleOverlayFunc={toggleOverlayFunc}
           headerHeightFunc={headerHeightFunc}
         />
       </HeaderWrapper>
     );
   }
 }

Header.propTypes = {
  toggleOverlayFunc: PropTypes.func.isRequired,
  headerHeightFunc: PropTypes.func.isRequired
}

export default Header;
