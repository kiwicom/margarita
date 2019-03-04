// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';

import { Loader, PageLoader } from '.';

storiesOf('Loader', module)
  .addDecorator(getStory => getStory())
  .add('Small Loader', () => <Loader />)
  .add('Large Loader', () => <Loader size="large" />)
  .add('Page Loader', () => <PageLoader />);
