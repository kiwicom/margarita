// @flow

import * as React from 'react';

import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +rating?: number,
  +style?: StylePropType,
|};

export default function Rating({ rating = 0, style }: Props) {
  return <Text style={[styles.rating, style]}>{'★'.repeat(rating)}</Text>;
}

const styles = StyleSheet.create({
  rating: {
    letterSpacing: 2,
  },
});
