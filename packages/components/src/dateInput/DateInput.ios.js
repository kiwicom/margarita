// @flow

import React from 'react';
import { DatePickerIOS, View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { MAX_AGE } from '@kiwicom/margarita-config';
import { subYears } from 'date-fns';

type Props = {|
  +onDateChange: Date => void,
  +date: ?Date,
  +isEditModeEnabled: boolean,
|};

const DateInput = ({ date, onDateChange }: Props) => {
  return (
    <View style={styles.container}>
      <DatePickerIOS
        initialDate={date || new Date()}
        date={date}
        onDateChange={onDateChange}
        mode="date"
        minimumDate={subYears(new Date(), MAX_AGE)}
        maximumDate={new Date()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default DateInput;
