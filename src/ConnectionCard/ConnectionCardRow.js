// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '../PlatformStyleSheet';
import type { StylePropType } from '../PlatformStyleSheet/StyleTypes';

type Props = {|
  +children: React.Node,
  +style?: StylePropType,
|};
export default function ConnectionCardRow({ children, style }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
