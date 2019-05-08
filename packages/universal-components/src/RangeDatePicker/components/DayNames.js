// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { format } from 'date-fns';

import { StyleSheet } from '../../PlatformStyleSheet';
import { Text } from '../../Text';
import { designTokens } from '../../DesignTokens';
import { getWeekArrayOfSpecificDate } from '../libs';
import type { WeekStartsType } from '../RangeDatePickerTypes';

type Props = {|
  +weekStartsOn: WeekStartsType,
|};

const getDayNames = weekStartsOn =>
  getWeekArrayOfSpecificDate(new Date(), weekStartsOn).map(day =>
    format(day, 'E'),
  );

const DayName = ({ name }) => (
  <View style={styles.dayNameContainer}>
    <Text style={styles.dayName}>{name}</Text>
  </View>
);
export default function DayNames({ weekStartsOn }: Props) {
  const dayNames = getDayNames(weekStartsOn);
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
