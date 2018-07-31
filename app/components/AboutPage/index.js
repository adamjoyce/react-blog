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
               <p>Welcome to A Torpid Pumpkin!</p>
               <p>This is the first paragraph explaining all about the point of
               this blog and all the great things that will come from it!</p>
               <p>This is the second paragraph further amazing you with all the
               awesomeness of moi, me, and i.</p>
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
