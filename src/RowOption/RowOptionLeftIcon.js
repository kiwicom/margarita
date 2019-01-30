// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../Icon';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +border?: 'long' | 'short' | 'shaped',
  +type: 'localization' | 'destination' | 'airplane' | 'bus' | 'train',
|};

export default function RowOptionContainer({ type, border }: Props) {
  let icon = '';

  switch (type) {
    case 'localization':
      icon = Platform.OS === 'android' ? 'gps' : 'gps-ios';
      break;
    case 'destination':
      icon = 'city';
      break;
    case 'airplane':
      icon = 'airplane-up';
      break;
    case 'bus':
      icon = 'bus';
      break;
    case 'train':
      icon = 'train';
      break;
    default:
      icon = 'city';
  }

  const iconColor =
    type === 'localization'
      ? defaultTokens.paletteProductNormal
      : defaultTokens.colorIconSecondary;

  return (
    <View style={styles.leftIconContainer}>
      <View style={styles.leftIcon}>
        <Icon name={icon} color={iconColor} />
      </View>
      {border === 'shaped' && (
        <View style={styles.triangleShape} testID="triangle-shape" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  triangleShape: {
    height: 8,
    width: 8,
    borderColor: defaultTokens.paletteInkLighter,
    borderStartWidth: 1,
    borderTopWidth: 1,
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    bottom: -7,
    backgroundColor: 'white',
    android: {
      bottom: -10,
    },
  },
  leftIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    padding: 10,
  },
});
