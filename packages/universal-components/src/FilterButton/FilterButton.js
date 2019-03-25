// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { designTokens } from '../DesignTokens';
import { Text } from '../Text';
import { Touchable } from '../Touchable';
import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './FilterButtonTypes';

export default function FilterButton({
  title,
  isActive,
  onPress,
  icon,
}: Props) {
  const filterIcon =
    icon == null
      ? null
      : React.cloneElement(icon, {
          color: isActive
            ? defaultTokens.paletteCloudNormal
            : defaultTokens.colorIconPrimary,
          size: 'medium',
        });

  return (
    <Touchable
      onPress={onPress}
      style={[styles.button, isActive && styles.activeButton]}
    >
      <View style={styles.row}>
        {icon && <View style={styles.icon}>{filterIcon}</View>}
        <Text style={[styles.buttonText, isActive && styles.activeButtonText]}>
          {title}
        </Text>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultTokens.paletteCloudNormal,
    borderRadius: 2,
    paddingHorizontal: 8,
    marginEnd: 8,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    paddingVertical: 4,
    fontWeight: designTokens.fontWeightMedium,
    color: defaultTokens.colorTextPrimary,
    fontSize: 12,
    lineHeight: 15,
  },
  activeButton: {
    backgroundColor: defaultTokens.paletteInkNormal,
  },
  activeButtonText: {
    color: defaultTokens.paletteCloudNormal,
  },
  icon: {
    paddingEnd: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
