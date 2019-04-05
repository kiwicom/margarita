// @flow

import * as React from 'react';
import { View } from 'react-native';

import { StyleSheet } from '../PlatformStyleSheet';
import RenderDay from './RenderDay';

type Props = {|
  +data: Array<Date>,
  +onDayPress: (Array<Date>) => void,
  +keyPrefix: string,
  +selectedDates: $ReadOnlyArray<Date>,
  +isRangePicker: boolean,
|};

export default function RenderWeek({
  data,
  onDayPress,
  keyPrefix,
  selectedDates,
  isRangePicker,
}: Props) {
  return (
    <View style={styles.row}>
      {data.map((day, index) => {
        return (
          <RenderDay
            key={`${keyPrefix}-${+day}-${index}`}
            day={day}
            onPress={onDayPress}
            selectedDates={selectedDates}
            isRangePicker={isRangePicker}
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
