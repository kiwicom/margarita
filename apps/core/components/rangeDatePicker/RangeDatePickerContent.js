// @flow

import * as React from 'react';
import { View, FlatList } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { getMonthsData, type MonthsData } from './libs';
import RenderMonth from './RenderMonth';
import DayNames from './DayNames';
import RangeDateConfig from './RangeDateConfig';

type Props = {|
  onDayPress: Date => void,
  selectedDate: Date,
|};

export default class DatePicker extends React.Component<Props> {
  static monthsData: Array<MonthsData> = getMonthsData(
    RangeDateConfig.numberOfRenderedMonths,
  );

  renderMonthItem = ({ item }: {| +item: MonthsData |}) => {
    return (
      <RenderMonth
        data={item}
        onDayPress={this.props.onDayPress}
        selectedDate={this.props.selectedDate}
      />
    );
  };

  keyExtractor = (item: MonthsData, index: number) =>
    `month-${item.year}-${item.month}-${index}`;

  render() {
    return (
      <View style={styles.container}>
        <DayNames />
        {DatePicker.monthsData && (
          <FlatList
            contentContainerStyle={styles.monthsContainer}
            data={DatePicker.monthsData}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderMonthItem}
            extraData={this.props.selectedDate}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 500,
    width: 382,
  },
  monthsContainer: {
    margin: parseFloat(defaultTokens.spaceXSmall),
  },
});
