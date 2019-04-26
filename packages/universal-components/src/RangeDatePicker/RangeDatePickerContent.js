// @flow

import * as React from 'react';
import { View, FlatList, Image } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { isSameMonth, isSameYear } from 'date-fns';

import { designTokens } from '../DesignTokens';
import { StyleSheet } from '../PlatformStyleSheet';
import { getMonths, spaceBetweenMonths } from './libs';
import type { MonthDateType, WeekStartsType } from './RangeDatePickerTypes';
import RenderMonth from './RenderMonth';
import DayNames from './DayNames';
import AlphaToWhite from './assets/alpha-to-white-vertical.png';

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
      nextMonths: getMonths(props.numberOfRenderedMonths, props.weekStartsOn),
    };
  }

  setScrollPosition = () =>
    this.state.nextMonths.reduce((acc, monthDate, index) => {
      const dateObject = new Date(monthDate.year, monthDate.month);
      if (
        isSameMonth(dateObject, this.props.selectedDates[0]) &&
        isSameYear(dateObject, this.props.selectedDates[0])
      ) {
        return index;
      }
      return acc;
    }, 0);

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

  getFlatListLayout = (data: Array<MonthDateType>, index: number) => {
    const length =
      data[index].numberOfWeeks * designTokens.heightCalendarItem +
      spaceBetweenMonths;
    const offset = data.reduce(
      (acc, monthData, monthDataIndex) =>
        monthDataIndex < index
          ? acc +
            monthData.numberOfWeeks * designTokens.heightCalendarItem +
            spaceBetweenMonths
          : acc,
      0,
    );
    return {
      length,
      offset,
      index,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <DayNames weekStartsOn={this.props.weekStartsOn} />
        {this.state.nextMonths && (
          <>
            <FlatList
              contentContainerStyle={styles.monthsContainer}
              data={this.state.nextMonths}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderMonthItem}
              extraData={this.props.selectedDates}
              initialNumToRender={2}
              style={styles.flatList}
              getItemLayout={this.getFlatListLayout}
              initialScrollIndex={this.setScrollPosition()}
            />
            <View style={styles.gradientOverlapContainer}>
              <Image
                source={AlphaToWhite}
                style={styles.gradientOverlapImage}
                resizeMode="stretch"
              />
            </View>
          </>
        )}
      </View>
    );
  }
}

const scrollBarWidth = 17;
const gradientHeight = 20;

const styles = StyleSheet.create({
  container: {
    height: 428,
    web: {
      minWidth: 382,
    },
  },
  gradientOverlapContainer: {
    position: 'relative',
    marginTop: -gradientHeight,
  },
  gradientOverlapImage: {
    height: gradientHeight,
    width: '100%',
  },
  monthsContainer: {
    marginHorizontal: parseFloat(defaultTokens.spaceXSmall),
    paddingBottom: gradientHeight,
  },
  flatList: {
    web: { paddingEnd: scrollBarWidth },
  },
});
