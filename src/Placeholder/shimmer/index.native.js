// @flow

import * as React from 'react';
import { Image } from 'react-native';
import Shimmer from 'react-native-shimmer';
import StyleSheet from '../../PlatformStyleSheet';

const ShimmeringLoader = ({ style, ...rest }: any) => (
  <Shimmer {...rest}>
    <Image style={[styles.container, style]} />
  </Shimmer>
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default ShimmeringLoader;
