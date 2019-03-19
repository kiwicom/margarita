// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View } from 'react-native';

import { Text } from '../Text';
import { StyleSheet, type StylePropType } from '../PlatformStyleSheet';

type Props = {|
  +children: React.Node,
  +filled?: boolean,
  +disabled?: boolean,
  +required?: boolean,
  +inlineLabel?: boolean,
  +labelContainerStyle?: StylePropType,
  +labelTextStyle?: StylePropType,
|};

const getAsteriksStyle = (filled, disabled) => {
  if (disabled) {
    return styles.asteriksDisabled;
  }
  if (filled) {
    return styles.asteriksFilled;
  }
  return styles.asteriksDefault;
};

const Asteriks = ({ filled, children, disabled }) => (
  <Text style={getAsteriksStyle(filled, disabled)}>{children}</Text>
);

export default function FormLabel({
  children,
  required,
  filled,
  disabled,
  inlineLabel,
  labelContainerStyle,
  labelTextStyle,
}: Props) {
  return (
    <View
      style={[
        inlineLabel ? styles.inlineFormLabel : styles.formLabel,
        labelContainerStyle,
      ]}
    >
      {required && (
        <Asteriks filled={filled} disabled={disabled}>
          *{' '}
        </Asteriks>
      )}
      <Text style={[labelTextStyle, styles.labelText]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  asteriksFilled: {
    fontWeight: '700',
    fontSize: 14,
    color: defaultTokens.colorFormLabelFilled,
  },
  asteriksDisabled: {
    fontWeight: '700',
    fontSize: 14,
    color: defaultTokens.colorFormLabel,
  },
  asteriksDefault: {
    fontWeight: '700',
    fontSize: 14,
    color: defaultTokens.colorTextError,
  },
  labelText: {
    fontSize: 14,
  },
  inlineFormLabel: {
    flexDirection: 'row',
    marginBottom: 0,
    flexWrap: 'nowrap',
  },
  formLabel: {
    flexDirection: 'row',
    marginBottom: 4,
    marginStart: parseFloat(defaultTokens.spaceSmall),
  },
});
