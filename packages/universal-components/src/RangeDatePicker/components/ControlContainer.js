// @flow

import * as React from 'react';
import { View } from 'react-native';
import { format, isSameDay } from 'date-fns';

import { StyleSheet } from '../../PlatformStyleSheet';
import ControlContainerItem from './ControlContainerItem';

type Props = {|
  +label: string,
  +dates: $ReadOnlyArray<Date>,
  +daysInDestination?: ?$ReadOnlyArray<Date>,
  +dateFormat: string,
|};

export default class ControlContainer extends React.Component<Props> {
  render() {
    const { label, dates, dateFormat } = this.props;
    const formattedDate = isSameDay(dates[0], dates[1])
      ? format(dates[0], dateFormat)
      : `${format(dates[0], dateFormat)}–${format(dates[1], dateFormat)}`;
    return (
      <View style={styles.row}>
        <ControlContainerItem value={formattedDate} label={label} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});
