// @flow

import * as React from 'react';
import { Text, View, Platform } from 'react-native';
import { StyleSheet } from '../PlatformStyleSheet';
import theme, { parsePxValue } from './styles';

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
    marginStart: parsePxValue(theme.orbit.spaceXSmall),
  },
  label: {
    fontFamily: Platform.OS === 'web' ? theme.orbit.fontFamily : 'Roboto',
    fontSize: parsePxValue(theme.orbit.fontSizeFormLabel),
    fontWeight: '400',
    color: theme.orbit.colorFormLabel,
    lineHeight: parsePxValue(theme.orbit.heightCheckbox),
  },
  labelChecked: {
    fontWeight: '500',
  },
  info: {
    fontFamily: Platform.OS === 'web' ? theme.orbit.fontFamily : 'Roboto',
    fontSize: parsePxValue(theme.orbit.fontSizeFormFeedback),
    color: theme.orbit.colorInfoCheckBoxRadio,
    lineHeight: 16,
  },
});
