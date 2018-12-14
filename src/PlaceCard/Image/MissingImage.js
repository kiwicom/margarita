// @flow

import * as React from 'react';
import { ImageBackground } from 'react-native';

import type { StylePropType } from '../../PlatformStyleSheet/StyleTypes';
import CityPlaceholder from '../assets/city-placeholder.png';

type Props = {|
  +source: {|
    +uri: ?string,
  |},
  +style?: StylePropType,
  +resizeMode?: 'cover' | 'contain' | 'stretch',
|};

export default function MissingImage(imageProps: Props) {
  return <ImageBackground {...imageProps} source={CityPlaceholder} />;
}
