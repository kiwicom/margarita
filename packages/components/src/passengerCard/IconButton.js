// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  StyleSheet,
  Icon,
  ExtendedTouchable,
} from '@kiwicom/universal-components';

type Props = {
  iconType: 'edit' | 'close',
  onPress: () => void,
};

const IconButton = ({ iconType, onPress }: Props) => (
  <View style={styles.container}>
    <ExtendedTouchable onPress={onPress}>
      <Icon name={iconType} color={defaultTokens.backgroundButtonPrimary} />
    </ExtendedTouchable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingEnd: parseInt(defaultTokens.spaceLarge, 10),
  },
});

export default IconButton;
