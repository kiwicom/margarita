// @flow

import React from 'react';
import { Platform } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import ServiceLogo from './index';
import ServiceLogoWeb from './index.web';

storiesOf('ServiceLogo', module)
  .add('Default', () => {
    if (Platform.OS === 'web') {
      return <ServiceLogoWeb name="Amex" size="large" />;
    }
    return <ServiceLogo name="VisaHQ" />;
  })
  .add('Gray scale', () => {
    if (Platform.OS === 'web') {
      return <ServiceLogoWeb name="AirHelp" size="large" grayScale />;
    }
    return <ServiceLogo name="VisaHQ" grayScale />;
  });
