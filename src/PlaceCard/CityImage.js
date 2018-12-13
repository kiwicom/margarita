// @flow strict

import * as React from 'react';

import StyleSheet from '../PlatformStyleSheet';
import NetworkImage from './NetworkImage';

import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +url: ?string,
  +style?: StylePropType,
|};

export default function CityImage({ url, style }: Props) {
  return (
    <NetworkImage
      source={{
        uri: url,
      }}
      style={[styles.image, style]}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});
