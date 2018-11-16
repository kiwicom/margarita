// @flow

import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react-native';

import IconsList from './IconsList';

import Icon from './index';

storiesOf('Icon', module)
  .addDecorator(getStory => getStory())
  .add('Regular Icon', () => (
    <React.Fragment>
      <Icon name="check" />
    </React.Fragment>
  ))
  .add('Custom Icon', () => (
    <React.Fragment>
      <Icon name="check" color="#46B655" size={80} />
    </React.Fragment>
  ))
  .add('All Icons list', () => (
    <React.Fragment>
      <IconsList />
    </React.Fragment>
  ));
