// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, type StylePropType } from '@kiwicom/universal-components';

type Props = {|
  +children?: React.Node,
  +style?: StylePropType,
|};

export default function ItineraryCardRow({ children, style }: Props) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    web: {
      paddingHorizontal: 0,
      paddingVertical: 0,
    },
  },
});
