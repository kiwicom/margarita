// @flow

import * as React from 'react';
import { Image } from 'react-native';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

import MissingImage from './MissingImage';

type Props = {|
  +source: {|
    +uri: ?string,
  |},
  +style?: StylePropType,
  +resizeMode?:
    | 'cover' // scales the image uniformly - image will be equal or larger
    | 'contain', // scales the image uniformly - image will be equal or smaller
|};

export default function NetworkImage(imageProps: Props) {
  if (!imageProps.source.uri) {
    return <MissingImage {...imageProps} resizeMode="stretch" />;
  }

  const newProps = {
    ...imageProps,
    style: [
      imageProps.style,
      {
        overflow: 'hidden', // otherwise 'borderRadius' won't work
      },
    ],
  };

  return <Image {...newProps} />;
}
