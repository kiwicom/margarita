// @flow

import * as React from 'react';
import { View, FlatList } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { getNextMonths, type MonthDate } from './libs';
import RenderMonth from './RenderMonth';
import DayNames from './DayNames';
import RangeDateConfig from './RangeDateConfig';

type Props = {|
  +onDayPress: Date => void,
  +selectedDate: Date,
|};

export default class RangeDatePickerContent extends React.Component<Props> {
  static nextMonths: Array<MonthDate> = getNextMonths(
    RangeDateConfig.numberOfRenderedMonths,
  );

  renderMonthItem = ({ item }: {| +item: MonthDate |}) => {
    return (
      <RenderMonth
        monthDate={item}
        onDayPress={this.props.onDayPress}
        selectedDate={this.props.selectedDate}
      />
    );
  };

  keyExtractor = (item: MonthDate, index: number) =>
    `month-${item.year}-${item.month}-${index}`;

  render() {
    return (
      <View style={styles.container}>
        <DayNames />
        {RangeDatePickerContent.nextMonths && (
          <FlatList
            contentContainerStyle={styles.monthsContainer}
            data={RangeDatePickerContent.nextMonths}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderMonthItem}
            extraData={this.props.selectedDate}
            initialNumToRender={2}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 428,
    web: {
      minWidth: 382,
    },
  },
  monthsContainer: {
    margin: parseFloat(defaultTokens.spaceXSmall),
  },
});
