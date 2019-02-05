// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { Props } from './RadioButtonTypes';
import { StyleSheet } from '../PlatformStyleSheet';
import { Icon } from '../Icon';
import { Text } from '../Text';

export default function RadioButton({
  type = 'bullet',
  bulletPosition = 'left',
  checked,
  disabled,
  children,
  onPress,
  style,
  label,
}: Props) {
  const isCheckType = type === 'check';
  const renderLabel =
    children ||
    (label != null && label !== '' && (
      <View style={styles.label} testID="label-wrapper">
        <Text>{label}</Text>
      </View>
    ));
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.wrapper, disabled && styles.wrapperDisabled, style]}>
        {bulletPosition === 'right' && renderLabel}
        <View
          style={[
            styles.bullet,
            checked && styles.bulletChecked,
            checked && isCheckType && styles.bulletCheckType,
          ]}
        >
          {checked &&
            (isCheckType ? (
              <Icon name="check" color="#ffffff" size="medium" />
            ) : (
              <View style={styles.bulletFill} />
            ))}
        </View>
        {bulletPosition === 'left' && renderLabel}
      </View>
    </TouchableWithoutFeedback>
  );
}

const bulletSize = {
  wrapper: 24,
  fill: 14,
};
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  wrapperDisabled: {
    opacity: parseFloat(defaultTokens.opacityRadioButtonDisabled),
  },
  bullet: {
    justifyContent: 'center',
    alignItems: 'center',
    width: bulletSize.wrapper,
    height: bulletSize.wrapper,
    borderRadius: bulletSize.wrapper * 0.5,
    borderWidth: 2,
    borderColor: defaultTokens.borderColorCheckboxRadio,
  },
  bulletChecked: {
    borderColor: defaultTokens.paletteProductNormal,
  },
  bulletCheckType: {
    backgroundColor: defaultTokens.paletteProductNormal,
  },
  bulletFill: {
    width: bulletSize.fill,
    height: bulletSize.fill,
    borderRadius: bulletSize.fill * 0.5,
    backgroundColor: defaultTokens.paletteProductNormal,
  },
  label: {
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
});
