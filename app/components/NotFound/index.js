import React from 'react';
import PropTypes from 'prop-types';

import {PageWrapper, TextWrapper, Code, Text} from './style';
import urls from '../../nav/urls';

import LinkButton from '../LinkButton';

/**
 * 404 Page.
 */
class NotFound extends React.Component {
  /**
   * Renders the component.
   */
  render() {
    const {colors} = this.props.theme;

    return (
      <PageWrapper>
        <TextWrapper>
          <Code>404</Code>
          <Text>You're Drunk. Go Home.</Text>
          <LinkButton
            to={urls.home}
            bgColor={colors.tertiary}
            textColor={colors.primary}>
            Home
          </LinkButton>
        </TextWrapper>
      </PageWrapper>
    );
  }
}

NotFound.propTypes = {
  theme: PropTypes.object.isRequired
}

export default NotFound;
