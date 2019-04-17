// @flow

import * as React from 'react';
import { View, FlatList } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { getNextMonths, type MonthDate, type WeekStarts } from './libs';
import RenderMonth from './RenderMonth';
import DayNames from './DayNames';

type Props = {|
  +onDayPress: ($ReadOnlyArray<Date>) => void,
  +selectedDates: $ReadOnlyArray<Date>,
  +numberOfRenderedMonths: number,
  +weekStartsOn: WeekStarts,
  +isRangePicker: boolean,
|};

type State = {|
  nextMonths: Array<MonthDate>,
|};

export default class RangeDatePickerContent extends React.Component<
  Props,
  State,
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nextMonths: getNextMonths(props.numberOfRenderedMonths),
    };
  }

  renderMonthItem = ({ item }: {| +item: MonthDate |}) => {
    return (
      <RenderMonth
        monthDate={item}
        onDayPress={this.props.onDayPress}
        selectedDates={this.props.selectedDates}
        weekStartsOn={this.props.weekStartsOn}
        isRangePicker={this.props.isRangePicker}
      />
    );
  };

  keyExtractor = (item: MonthDate, index: number) =>
    `month-${item.year}-${item.month}-${index}`;

  render() {
    return (
      <View style={styles.container}>
        <DayNames weekStartsOn={this.props.weekStartsOn} />
        {this.state.nextMonths && (
          <FlatList
            contentContainerStyle={styles.monthsContainer}
            data={this.state.nextMonths}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderMonthItem}
            extraData={this.props.selectedDates}
            initialNumToRender={2}
            style={styles.flatList}
          />
        )}
      </View>
    );
  }
}

const scrollBarWidth = 17;

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
  flatList: {
    web: { paddingEnd: scrollBarWidth },
  },
});
