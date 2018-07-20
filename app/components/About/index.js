import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './style';

import Header from '../Header';

/**
 * The about page describing a little about the blog / me.
 */
 class About extends React.Component {
   render() {
     const {toggleOverlayFunc, headerHeightFunc, headerHeight} = this.props;
     return (
       <React.Fragment>
         <Header
           toggleOverlayFunc={toggleOverlayFunc}
           headerHeightFunc={headerHeightFunc}
         />
         {headerHeight > 0
           ? <Wrapper
               style={{top: headerHeight}}>
               This is the About page!
             </Wrapper>
           : null}
       </React.Fragment>
     );
   }
 }

About.propTypes = {
  toggleOverlayFunc: PropTypes.func.isRequired,
  headerHeightFunc: PropTypes.func.isRequired,
  headerHeight: PropTypes.number.isRequired
}

export default About;
