// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';

import IconsList from './IconsList';

import { Icon } from '.';

storiesOf('Icon', module)
  .addDecorator(getStory => getStory())
  .add('Regular Icon', () => (
    <React.Fragment>
      <Icon name="check" />
    </React.Fragment>
  ))
  .add('Custom Icon', () => (
    <React.Fragment>
      <Icon name="check" color="#46B655" size="large" />
    </React.Fragment>
  ))
  .add('Wrong Icon Name', () => (
    <React.Fragment>
      {/* $FlowExpectedError: Wrong Icon name for showcase purposes */}
      <Icon name="-" color="#46B655" size="large" />
    </React.Fragment>
  ))
  .add('All Icons list', () => (
    <React.Fragment>
      <IconsList />
    </React.Fragment>
  ));
