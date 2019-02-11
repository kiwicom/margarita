// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { Icon } from '@kiwicom/universal-components';

export default function ShareIcon() {
  switch (Platform.OS) {
    case 'ios': {
      return <Icon name="share-ios" />;
    }
    case 'android': {
      return <Icon name="share-android" />;
    }
    default: {
      return <Icon name="share" />;
    }
  }
}
