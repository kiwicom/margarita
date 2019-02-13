// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import {
  Icon,
  type StylePropType,
  type IconNameType,
} from '@kiwicom/universal-components';

type Size = 'small' | 'medium' | 'large';

export type Props = {|
  +name?: IconNameType,
  size?: Size,
  color?: string,
  style?: StylePropType,
|};

export default function ShareIcon(props: Props) {
  switch (Platform.OS) {
    case 'ios': {
      return <Icon {...props} name="share-ios" />;
    }
    case 'android': {
      return <Icon {...props} name="share-android" />;
    }
    default: {
      return <Icon {...props} name="share" />;
    }
  }
}
