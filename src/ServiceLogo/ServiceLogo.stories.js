// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ServiceLogo from './component';

storiesOf('ServiceLogo', module)
  .add('Default', () => <ServiceLogo name="Amex" size="large" />)
  .add('Gray scale', () => <ServiceLogo name="VisaHQ" grayScale />);
