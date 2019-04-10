// @flow

import * as React from 'react';
import { View, FlatList } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { getMonths } from './libs';
import type { MonthDateType, WeekStartsType } from './RangeDatePickerTypes';
import RenderMonth from './RenderMonth';
import DayNames from './DayNames';

type Props = {|
  +onDayPress: ($ReadOnlyArray<Date>) => void,
  +selectedDates: $ReadOnlyArray<Date>,
  +numberOfRenderedMonths: number,
  +weekStartsOn: WeekStartsType,
  +isRangePicker: boolean,
|};

type State = {|
  nextMonths: Array<MonthDateType>,
|};

export default class RangeDatePickerContent extends React.Component<
  Props,
  State,
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nextMonths: getMonths(props.numberOfRenderedMonths),
    };
  }

  renderMonthItem = ({ item }: {| +item: MonthDateType |}) => {
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

  keyExtractor = (item: MonthDateType, index: number) =>
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
