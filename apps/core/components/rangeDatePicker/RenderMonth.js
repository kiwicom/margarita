// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { Text } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { format } from 'date-fns';
import { MONTH_NAME_FORMAT } from '@kiwicom/margarita-config';

import RenderWeek from './RenderWeek';
import { type MonthsData } from './libs';

type Props = {|
  +data: MonthsData,
  +onDayPress: Date => void,
  +selectedDate: Date,
|};

export default function RenderMonth({ data, onDayPress, selectedDate }: Props) {
  const keyPrefix = `${data.year}-${data.month}`;
  return (
    <View>
      <Text weight="bold" style={styles.monthLabel}>
        {format(new Date(0, data.month), MONTH_NAME_FORMAT)}{' '}
        <Text weight="bold" style={styles.year}>
          {data.year}
        </Text>
      </Text>
      {data.weeks.map((week, index) => (
        <RenderWeek
          key={`${keyPrefix}-${index}`}
          data={week}
          keyPrefix={keyPrefix}
          onDayPress={onDayPress}
          selectedDate={selectedDate}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  monthLabel: {
    marginTop: 20,
    marginBottom: parseFloat(defaultTokens.spaceMedium),
    marginHorizontal: parseFloat(defaultTokens.spaceXSmall),
    fontSize: parseFloat(defaultTokens.fontSizeTextLarge),
  },
  year: {
    color: defaultTokens.colorTextSecondary,
  },
});
