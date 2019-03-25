// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { designTokens } from '../DesignTokens';
import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';

type Props = {|
  +label?: React.Node,
  +checked?: boolean,
  +info?: React.Node,
|};

export default function CheckboxText({ label, checked, info }: Props) {
  return (
    <View style={styles.view}>
      <Text style={[styles.label, checked && styles.labelChecked]}>
        {label}
      </Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginStart: parseInt(defaultTokens.spaceXSmall, 10),
  },
  label: {
    fontSize: parseInt(defaultTokens.fontSizeFormLabel, 10),
    color: defaultTokens.colorFormLabel,
    lineHeight: parseInt(defaultTokens.heightCheckbox, 10),
  },
  labelChecked: {
    web: {
      fontWeight: designTokens.fontWeightMedium,
    },
  },
  info: {
    fontSize: parseInt(defaultTokens.fontSizeFormFeedback, 10),
    color: defaultTokens.colorInfoCheckBoxRadio,
    lineHeight: 16,
  },
});
