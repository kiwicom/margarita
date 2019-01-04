// @flow strict

import * as React from 'react';
import { StyleSheet, type StylePropType } from '@kiwicom/universal-components';

import NetworkImage from './NetworkImage';

type Props = {|
  +url: ?string,
  +style?: StylePropType,
|};

export default function CityImage({ url, style }: Props) {
  return (
    <NetworkImage
      source={{
        uri: url ?? '',
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
