import React from 'react';
import PropTypes from 'prop-types';

import {PageWrapper, TextWrapper, Code, Text} from './style';
import urls from '../../nav/urls';

import {LinkButton} from '../ReadOnButton/style';

class NotFound extends React.Component {
  render() {
    const {colors} = this.props.theme;

    return (
      <PageWrapper>
        <TextWrapper>
          <Code>404</Code>
          <Text>You're Drunk. Go Home.</Text>
          <LinkButton
            to={urls.home}
            textcolor={colors.primary}
            bgcolor={colors.tertiary}
            onTouchStart={() => null}>
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
