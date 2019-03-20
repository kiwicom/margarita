// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { Text } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import RangeDateConfig from './RangeDateConfig';

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
    width: RangeDateConfig.dayItemWidth,
    padding: RangeDateConfig.dayItemSpace / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayName: {
    color: defaultTokens.colorTextSecondary,
  },
});
