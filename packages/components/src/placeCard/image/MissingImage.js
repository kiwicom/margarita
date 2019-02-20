// @flow

import * as React from 'react';
import { ImageBackground } from 'react-native';

import type { Props } from './ImageTypes';

export default function MissingImage(imageProps: Props) {
  return (
    <ImageBackground
      {...imageProps}
      source={{
        uri: 'https://images.kiwi.com/photos/375x165/photos.jpg',
        height: 165,
        width: 375,
      }}
    />
  );
}
