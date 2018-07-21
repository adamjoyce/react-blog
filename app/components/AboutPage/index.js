import React from 'react';
import PropTypes from 'prop-types';

import {ContentWrapper} from './style';

import Header from '../Header';

/**
 * The about page describing a little about the blog / me.
 */
 class AboutPage extends React.Component {
   render() {
     const {toggleOverlayFunc, headerHeightFunc, headerHeight} = this.props;
     return (
       <React.Fragment>
         <Header
           toggleOverlayFunc={toggleOverlayFunc}
           headerHeightFunc={headerHeightFunc}
         />
         {headerHeight > 0
           ? <ContentWrapper
               style={{top: headerHeight}}>
               This is the About page!
             </ContentWrapper>
           : null}
       </React.Fragment>
     );
   }
 }

AboutPage.propTypes = {
  toggleOverlayFunc: PropTypes.func.isRequired,
  headerHeightFunc: PropTypes.func.isRequired,
  headerHeight: PropTypes.number.isRequired
}

export default AboutPage;
