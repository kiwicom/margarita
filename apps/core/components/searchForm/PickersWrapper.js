// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { LAYOUT } from '@kiwicom/margarita-device';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +children: React.Node,
  +layout: number,
|};

export default function PickersWrapper({ children, layout }: Props) {
  const desktopLayout = layout >= LAYOUT.desktop;
  const rowLayout = layout >= LAYOUT.largeMobile;

  return (
    <View
      style={[
        styles.container,
        desktopLayout && styles.desktopContainer,
        rowLayout && styles.rowContainer,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    web: {
      flex: 1,
    },
  },
  desktopContainer: {
    web: {
      marginEnd: parseInt(defaultTokens.spaceXSmall, 10),
    },
  },
  rowContainer: {
    web: {
      flexDirection: 'row',
    },
  },
});
