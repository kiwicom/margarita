// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
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

import type { OnLayout, OnDragEvent } from '../types';
import { StyleSheet, type StylePropType } from '../PlatformStyleSheet';
import { designTokens } from '../DesignTokens';
import { Text } from '../Text';
import { Touchable } from '../Touchable';
import DayItemArrow from './DayItemArrow';
import AnimatedDayItemArrow from './AnimatedDayItemArrow';
import DraggableItem from './DraggableItem';
import { findRelatedItem, isDayInPast } from './libs';
import type {
  DayItemSizeType,
  GrabbedSideType,
  WeekStartsType,
} from './RangeDatePickerTypes';

type Props = {|
  +day: ?Date,
  +onPress?: (Array<Date>) => void,
  +price?: ?string,
  +selectedDates: $ReadOnlyArray<Date>,
  +isRangePicker: boolean,
  +weekStartsOn: WeekStartsType,
|};

type State = {|
  isDragging?: boolean,
|};

type RenderArrowProps = {|
  +style?: StylePropType,
  +onPress?: () => void,
  +direction?: GrabbedSideType,
|};

const DayPrice = ({ price }) => (
  <View>
    <Text numberOfLines={1} style={styles.price}>
      {price}
    </Text>
  </View>
);

const RenderArrow = (props: RenderArrowProps) =>
  Platform.OS === 'android' ? (
    <DayItemArrow {...props} />
  ) : (
    <AnimatedDayItemArrow style={props.style} onPress={props.onPress} />
  );

export default class RenderDay extends React.Component<Props, State> {
  static dayItemSize: DayItemSizeType = {
    width: 51,
    height: designTokens.heightCalendarItem,
  };

  state = { isDragging: undefined };

  handlePress = () => {
    if (this.props.onPress && this.props.day) {
      this.props.onPress([this.props.day, this.props.day]);
    }
  };

  onLeftPress = () => {
    if (this.props.day) {
      const dayBefore = subDays(this.props.day, 1);
      if (!isDayInPast(dayBefore) && this.props.onPress) {
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

  onDrag = (event: OnDragEvent, grabbedSide: GrabbedSideType) => {
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
          grabbedSide: grabbedSide,
          weekStartsOn: this.props.weekStartsOn,
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
    const { day, price, selectedDates, isRangePicker } = this.props;
    const isFieldEmpty = day == null;
    const isStartOfSelectedDates = day && isSameDay(selectedDates[0], day);
    const isEndOfSelectedDates = day && isSameDay(selectedDates[1], day);
    const isDaySelected =
      day &&
      isWithinInterval(day, {
        start: startOfDay(selectedDates[0]),
        end: endOfDay(selectedDates[1]),
      });
    const onArrowPress = onPress => (isRangePicker ? onPress : undefined);
    return (
      <View
        style={[styles.container, isDaySelected && styles.onTheTop]}
        onLayout={this.measureDayItem}
      >
        <View>
          {isRangePicker &&
            (isStartOfSelectedDates || this.state.isDragging) && (
              <DraggableItem
                onDrag={this.onDrag}
                onDrop={this.onDrop}
                style={styles.draggableItemLeft}
                grabbedSide="left"
              />
            )}

          <Touchable
            onPress={this.handlePress}
            disabled={isDayInPast(day) || isFieldEmpty}
          >
            <>
              {isStartOfSelectedDates && isRangePicker && (
                <RenderArrow
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
                        isDayInPast(day) && styles.dayInPast,
                      ]}
                    >
                      {day && format(day, 'd')}
                    </Text>
                    {price != null ?? <DayPrice price={price} />}
                  </>
                )}
              </View>
              {isEndOfSelectedDates && isRangePicker && (
                <RenderArrow
                  onPress={onArrowPress(this.onRightPress)}
                  style={styles.rightArrow}
                  direction="right"
                />
              )}
            </>
          </Touchable>
          {isRangePicker && (isEndOfSelectedDates || this.state.isDragging) && (
            <DraggableItem
              onDrag={this.onDrag}
              onDrop={this.onDrop}
              style={styles.draggableItemRight}
              grabbedSide="right"
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
  },
  rightArrow: {
    end: 0,
    top: 12,
    android: {
      top: 0,
    },
  },
  draggableItemLeft: {
    start: -designTokens.widthDraggableCalendarItem / 2,
  },
  draggableItemRight: {
    end: -designTokens.widthDraggableCalendarItem / 2,
  },
});
