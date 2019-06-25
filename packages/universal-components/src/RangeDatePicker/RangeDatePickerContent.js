// @flow

import * as React from 'react';
import { View, FlatList, Image } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { isSameMonth, isSameYear, lastDayOfMonth } from 'date-fns';

import { designTokens } from '../DesignTokens';
import { StyleSheet } from '../PlatformStyleSheet';
import { getMonths, spaceBetweenMonths } from './libs';
import type { MonthDateType, WeekStartsType } from './RangeDatePickerTypes';
import RenderMonth from './components/RenderMonth';
import DayNames from './components/DayNames';
import AlphaToWhite from './assets/alpha-to-white-vertical.png';

type Props = {|
  +onDayPress: ($ReadOnlyArray<Date>) => void,
  +selectedDates: $ReadOnlyArray<Date>,
  +numberOfRenderedMonths: number,
  +weekStartsOn: WeekStartsType,
  +isRangePicker: boolean,
  +renderFirstMonthFrom: Date,
  +isChoosingPastDatesEnabled: boolean,
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
      nextMonths: getMonths({
        numberOfRenderedMonths: props.numberOfRenderedMonths,
        weekStartsOn: props.weekStartsOn,
        whichMonthsToRender: 'next',
        renderFirstMonthFrom: props.renderFirstMonthFrom,
      }),
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

  getRenderedCalendarRange = () => {
    const firstMonth = this.state.nextMonths[0];
    const lastMonth = this.state.nextMonths[this.state.nextMonths.length - 1];
    return [
      new Date(firstMonth.year, firstMonth.month),
      lastDayOfMonth(new Date(lastMonth.year, lastMonth.month)),
    ];
  };

  renderMonthItem = ({ item }: {| +item: MonthDateType |}) => {
    const {
      onDayPress,
      selectedDates,
      weekStartsOn,
      isRangePicker,
      isChoosingPastDatesEnabled,
    } = this.props;
    return (
      <RenderMonth
        renderedCalendarRange={this.getRenderedCalendarRange()}
        monthDate={item}
        onDayPress={onDayPress}
        selectedDates={selectedDates}
        weekStartsOn={weekStartsOn}
        isRangePicker={isRangePicker}
        isChoosingPastDatesEnabled={isChoosingPastDatesEnabled}
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
              extraData={[
                this.props.selectedDates,
                this.props.isChoosingPastDatesEnabled,
                this.props.isRangePicker,
              ]}
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
    flex: 1,
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
