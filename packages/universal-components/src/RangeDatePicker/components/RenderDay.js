// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  format,
  addDays,
  isWithinInterval,
  subDays,
  isSameDay,
  endOfDay,
  startOfDay,
} from 'date-fns';

import type { OnLayout, OnDragEvent } from '../../types';
import { StyleSheet } from '../../PlatformStyleSheet';
import { designTokens } from '../../DesignTokens';
import { Text } from '../../Text';
import { Touchable } from '../../Touchable';
import DayItemArrow from './DayItemArrow';
import DraggableItem from './DraggableItem';
import { findRelatedItem, isDayInPast } from '../libs';
import type {
  DayItemSizeType,
  GrabbedSideType,
  WeekStartsType,
} from '../RangeDatePickerTypes';

type Props = {|
  +day: ?Date,
  +onPress?: (Array<Date>) => void,
  +price?: ?string,
  +selectedDates: $ReadOnlyArray<Date>,
  +isRangePicker: boolean,
  +weekStartsOn: WeekStartsType,
  +isChoosingPastDatesEnabled: boolean,
|};

type State = {|
  isDragging?: boolean,
|};

const DayPrice = ({ price }) => (
  <View>
    <Text numberOfLines={1} style={styles.price}>
      {price}
    </Text>
  </View>
);

export default class RenderDay extends React.Component<Props, State> {
  static dayItemSize: DayItemSizeType = {
    width: 51,
    height: designTokens.heightCalendarItem,
  };

  state = { isDragging: undefined };

  isDayInPastActive = (day: ?Date) =>
    isDayInPast(day) && !this.props.isChoosingPastDatesEnabled;

  handlePress = () => {
    if (this.props.onPress && this.props.day) {
      this.props.onPress([this.props.day, this.props.day]);
    }
  };

  onLeftPress = () => {
    if (this.props.day) {
      const dayBefore = subDays(this.props.day, 1);
      if (!this.isDayInPastActive(dayBefore) && this.props.onPress) {
        this.props.onPress([dayBefore, this.props.selectedDates[1]]);
      }
    }
  };

  onRightPress = () => {
    if (this.props.onPress && this.props.day) {
      this.props.onPress([
        this.props.selectedDates[0],
        this.props.day && addDays(this.props.day, 1),
      ]);
    }
  };

  onDrag = (
    event: OnDragEvent,
    grabbedSide: GrabbedSideType,
    isChoosingPastDatesEnabled: boolean,
  ) => {
    if (!this.state.isDragging) {
      this.setState({ isDragging: true });
    }
    if (this.props.day) {
      findRelatedItem(
        event,
        {
          grabbedStartDay: this.props.day,
          selectedDates: this.props.selectedDates,
          dayItemSize: RenderDay.dayItemSize,
          grabbedSide,
          weekStartsOn: this.props.weekStartsOn,
          isChoosingPastDatesEnabled,
        },
        newSelectedDate => {
          if (this.props.onPress) {
            this.props.onPress(newSelectedDate);
          }
        },
      );
    }
  };

  onDrop = () => {
    this.setState({ isDragging: false });
  };

  measureDayItem = (e: OnLayout) => {
    RenderDay.dayItemSize = {
      width: e.nativeEvent.layout.width,
      height: designTokens.heightCalendarItem,
    };
  };

  render() {
    const {
      day,
      price,
      selectedDates,
      isRangePicker,
      isChoosingPastDatesEnabled,
    } = this.props;
    const isFieldEmpty = day == null;
    const isStartOfSelectedDates = day && isSameDay(selectedDates[0], day);
    const isEndOfSelectedDates = day && isSameDay(selectedDates[1], day);
    const isPossibleToChangeDateThisDirection =
      (day && !this.isDayInPastActive(subDays(day, 1))) ||
      !isSameDay(selectedDates[0], selectedDates[1]);
    const isDaySelected =
      day &&
      isWithinInterval(day, {
        start: startOfDay(selectedDates[0]),
        end: endOfDay(selectedDates[1]),
      });
    const onArrowPress = onPress => (isRangePicker ? onPress : undefined);

    const isLeftArrowRendered =
      isStartOfSelectedDates &&
      isPossibleToChangeDateThisDirection &&
      isRangePicker;
    const isRightArrowRendered = isEndOfSelectedDates && isRangePicker;
    const isLeftDraggableItemRendered =
      isRangePicker &&
      isPossibleToChangeDateThisDirection &&
      (isStartOfSelectedDates || this.state.isDragging);
    const isRightDraggableItemRendered =
      isRangePicker && (isEndOfSelectedDates || this.state.isDragging);

    return (
      <View
        style={[styles.container, isDaySelected && styles.onTheTop]}
        onLayout={this.measureDayItem}
      >
        <View>
          {isLeftDraggableItemRendered && (
            <DraggableItem
              onDrag={this.onDrag}
              onDrop={this.onDrop}
              onPress={onArrowPress(this.onLeftPress)}
              grabbedSide="left"
              dayItemSize={RenderDay.dayItemSize}
              isChoosingPastDatesEnabled={isChoosingPastDatesEnabled}
            />
          )}

          <Touchable
            onPress={this.handlePress}
            disabled={this.isDayInPastActive(day) || isFieldEmpty}
            style={styles.dayTouchableContainer}
          >
            <>
              {isLeftArrowRendered && (
                <DayItemArrow
                  onPress={onArrowPress(this.onLeftPress)}
                  style={styles.leftArrow}
                  direction="left"
                />
              )}
              <View
                style={[
                  styles.dayContainer,
                  isDaySelected && styles.selectedDatesContainer,
                  isStartOfSelectedDates &&
                    styles.startOfSelectedDatesContainer,
                  isEndOfSelectedDates && styles.endOfSelectedDatesContainer,
                ]}
              >
                {!isFieldEmpty && (
                  <>
                    <Text
                      weight="bold"
                      style={[
                        styles.day,
                        isDaySelected && styles.selectedDatesText,
                        this.isDayInPastActive(day) && styles.dayInPast,
                      ]}
                    >
                      {day && format(day, 'd')}
                    </Text>
                    {price != null ?? <DayPrice price={price} />}
                  </>
                )}
              </View>
              {isRightArrowRendered && (
                <DayItemArrow
                  onPress={onArrowPress(this.onRightPress)}
                  style={styles.rightArrow}
                  direction="right"
                />
              )}
            </>
          </Touchable>
          {isRightDraggableItemRendered && (
            <DraggableItem
              onDrag={this.onDrag}
              onDrop={this.onDrop}
              onPress={onArrowPress(this.onRightPress)}
              grabbedSide="right"
              dayItemSize={RenderDay.dayItemSize}
              isChoosingPastDatesEnabled={isChoosingPastDatesEnabled}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
  },
  onTheTop: {
    zIndex: parseFloat(defaultTokens.zIndexSticky),
  },
  dayContainer: {
    flex: 1,
    height: designTokens.heightCalendarItem,
    alignItems: 'center',
    justifyContent: 'center',
    padding: designTokens.paddingCalendarItem / 2,
  },
  dayTouchableContainer: {
    web: {
      height: designTokens.heightCalendarItem,
    },
  },
  day: {
    fontSize: designTokens.fontSizeCalendarItem,
  },
  price: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    color: defaultTokens.colorTextSecondary,
  },
  selectedDatesContainer: {
    backgroundColor: defaultTokens.backgroundButtonInfo,
  },
  startOfSelectedDatesContainer: {
    borderTopStartRadius: parseFloat(defaultTokens.borderRadiusNormal),
    borderBottomStartRadius: parseFloat(defaultTokens.borderRadiusNormal),
  },
  endOfSelectedDatesContainer: {
    borderTopEndRadius: parseFloat(defaultTokens.borderRadiusNormal),
    borderBottomEndRadius: parseFloat(defaultTokens.borderRadiusNormal),
  },
  selectedDatesText: {
    color: defaultTokens.colorTextButtonPrimary,
  },
  dayInPast: {
    color: defaultTokens.colorTextSecondary,
  },
  leftArrow: {
    start: 0,
    top: 12,
    android: {
      top: 0,
    },
    web: {
      top: 6,
      start: -7,
    },
  },
  rightArrow: {
    end: 0,
    top: 12,
    android: {
      top: 0,
    },
    web: {
      top: 6,
      end: -7,
    },
  },
});
