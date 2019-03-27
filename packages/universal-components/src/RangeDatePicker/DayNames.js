// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { Text } from '../Text';
import { designTokens } from '../DesignTokens';

const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const DayName = ({ name }) => (
  <View style={styles.dayNameContainer}>
    <Text style={styles.dayName}>{name}</Text>
  </View>
);
export default function DayNames() {
  return (
    <View style={styles.container}>
      {dayNames.map<React.Node>(dayName => (
        <DayName name={dayName} key={dayName} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: defaultTokens.borderColorTableCell,
    borderBottomWidth: parseFloat(defaultTokens.borderWidthCard),
    padding: parseFloat(defaultTokens.spaceXSmall),
  },
  dayNameContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: designTokens.paddingCalendarItem / 2,
  },
  dayName: {
    color: defaultTokens.colorTextSecondary,
  },
});
