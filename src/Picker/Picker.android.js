// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../Text';
import { Icon } from '../Icon';
import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './PickerTypes';
import { getSelectedLabel } from './PickerHelpers';
import NativePicker from './NativePicker';

const Picker = ({
  optionsData,
  selectedValue,
  onValueChange,
  placeholder = '',
  iconName,
}: Props) => {
  const selectedLabel = getSelectedLabel(
    optionsData,
    selectedValue,
    placeholder,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{selectedLabel}</Text>
      <Icon name={iconName ?? 'chevron-right'} style={styles.icon} />
      <NativePicker
        optionsData={optionsData}
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: parseInt(defaultTokens.heightInputNormal, 10),
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    backgroundColor: defaultTokens.backgroundButtonSecondary,
  },
  label: {
    flex: 1,
    color: defaultTokens.colorTextAttention,
    paddingLeft: parseInt(defaultTokens.spaceSmall, 10),
  },
  icon: {
    marginRight: 10,
  },
  picker: {
    position: 'absolute',
    left: 0,
    width: '100%',
    opacity: 0, // NOTE: This workaround is required because picker label cannot be currently styled on Android
    height: parseInt(defaultTokens.heightInputNormal, 10),
  },
});

export default Picker;
