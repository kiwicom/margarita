// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Icon } from '../Icon';
import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';
import type { IconNameType } from '../types/_generated-types';
import PickerButtonWrapper from './PickerButtonWrapper';

export type Props = {|
  +value?: ?string,
  +onPress?: () => void,
  +placeholder?: string,
  +iconName?: IconNameType,
|};

const defaultIcon = Platform.OS === 'web' ? 'chevron-down' : 'chevron-right';

export default function PickerButton(props: Props) {
  return (
    <PickerButtonWrapper onPress={props.onPress}>
      <View style={styles.container}>
        <Text
          style={[styles.valueText, !props.value && styles.valuePlaceholder]}
        >
          {props.value ?? props.placeholder}
        </Text>
        <Icon name={props.iconName ?? defaultIcon} />
      </View>
    </PickerButtonWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexBasis: parseInt(defaultTokens.heightInputNormal, 10),
    height: parseInt(defaultTokens.heightInputNormal, 10),
    borderRadius: parseInt(defaultTokens.borderRadiusLarge, 10),
    backgroundColor: defaultTokens.backgroundButtonSecondary,
    paddingHorizontal: parseInt(defaultTokens.spaceSmall, 10),
    web: {
      borderWidth: parseFloat(defaultTokens.borderWidthInput),
      borderColor: defaultTokens.borderColorInput,
      backgroundColor: defaultTokens.backgroundInput,
      borderRadius: parseInt(defaultTokens.borderRadiusNormal, 10),
    },
  },
  valueText: {
    color: defaultTokens.colorTextAttention,
    paddingEnd: parseInt(defaultTokens.spaceSmall, 10),
    web: {
      color: defaultTokens.colorTextPrimary,
    },
  },
  valuePlaceholder: {
    color: defaultTokens.colorTextInputDisabled,
  },
});
