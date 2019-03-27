// @flow

import * as React from 'react';
import { View, FlatList } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { getNextMonths, type MonthDate, type WeekStarts } from './libs';
import RenderMonth from './RenderMonth';
import DayNames from './DayNames';

type Props = {|
  +onDayPress: Date => void,
  +selectedDate: Date,
  +numberOfRenderedMonths: number,
  +weekStartsOn: WeekStarts,
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
        selectedDate={this.props.selectedDate}
        weekStartsOn={this.props.weekStartsOn}
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
