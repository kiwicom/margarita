// @flow

import * as React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'; /* eslint-disable-line no-restricted-imports */
import { StyleSheet } from '@kiwicom/universal-components';

const ShimmeringLoader = ({ style, ...rest }: any) => (
  <ShimmerPlaceHolder
    autoRun={true}
    duration={2000}
    style={[styles.container, style]}
    colorShimmer={[
      'rgba(0, 0, 0, 0.0)',
      'rgba(0, 0, 0, 0.1)',
      'rgba(0, 0, 0, 0)',
    ]}
    {...rest}
  />
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export default ShimmeringLoader;
