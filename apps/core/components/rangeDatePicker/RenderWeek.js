// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';

import RenderDay from './RenderDay';

type Props = {|
  +data: Array<Date>,
  +onDayPress: Date => void,
  +keyPrefix: string,
  +selectedDate: Date,
|};

export default function RenderWeek({
  data,
  onDayPress,
  keyPrefix,
  selectedDate,
}: Props) {
  return (
    <View style={styles.row}>
      {data.map((day, index) => {
        return (
          <RenderDay
            key={`${keyPrefix}-${+day}-${index}`}
            day={day}
            onPress={onDayPress}
            selectedDate={selectedDate}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
