import React from 'react';
import PropTypes from 'prop-types';

import {HeaderWrapper, Title} from './style';
import urls from '../../nav/urls';

import Navigation from '../Navigation';

/**
 * The page header for all pages excluding the landing page.
 */
 class Header extends React.Component {
   render() {
     const {toggleOverlayFunc, headerHeightFunc, opacity} = this.props;
     return (
       <HeaderWrapper>
         <Title
           to={urls.home}
           style={{opacity: opacity}}>
           A Torpid Pumpkin
         </Title>
         <Navigation
           toggleOverlayFunc={toggleOverlayFunc}
           headerHeightFunc={headerHeightFunc}
           opacity={opacity}
         />
       </HeaderWrapper>
     );
   }
 }

Header.propTypes = {
  toggleOverlayFunc: PropTypes.func.isRequired,
  headerHeightFunc: PropTypes.func,
  opacity: PropTypes.number
}

Header.defaultProps = {
  opacity: 1
}

export default Header;
