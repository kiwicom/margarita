// @flow

import * as React from 'react';
import { ImageBackground } from 'react-native';

import CityPlaceholder from './assets/city-placeholder.png';

export default function MissingImage(imageProps: Object) {
  return <ImageBackground {...imageProps} source={CityPlaceholder} />;
}
