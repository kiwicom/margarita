// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  format,
  addDays,
  isBefore,
  isWithinInterval,
  subDays,
  isSameDay,
  endOfDay,
  startOfDay,
} from 'date-fns';

import { StyleSheet, type StylePropType } from '../PlatformStyleSheet';
import { designTokens } from '../DesignTokens';
import { Text } from '../Text';
import { Touchable } from '../Touchable';
import DayItemArrow from './DayItemArrow';
import AnimatedDayItemArrow from './AnimatedDayItemArrow';

type Props = {|
  +day: Date,
  +onPress?: (Array<Date>) => void,
  +price?: ?string,
  +selectedDates: $ReadOnlyArray<Date>,
  +isRangePicker: boolean,
|};

type RenderArrowProps = {|
  +style?: StylePropType,
  +onPress?: () => void,
  +direction?: 'left' | 'right',
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

export default function RenderDay({
  day,
  onPress,
  price,
  selectedDates,
  isRangePicker,
}: Props) {
  function handlePress() {
    if (onPress) {
      onPress([day, day]);
    }
  }
  const isDayInPast = checkedDay => isBefore(checkedDay, new Date());
  const onLeftPress = () => {
    const dayBefore = subDays(day, 1);
    if (!isDayInPast(dayBefore) && onPress) {
      onPress([dayBefore, selectedDates[1]]);
    }
  };

  const onRightPress = () => {
    if (onPress) {
      onPress([selectedDates[0], addDays(day, 1)]);
    }
  };

  const isFieldEmpty = day == null;
  const isStartOfSelectedDates = isSameDay(selectedDates[0], day);
  const isEndOfSelectedDates = isSameDay(selectedDates[1], day);
  const isDaySelected = isWithinInterval(day, {
    start: startOfDay(selectedDates[0]),
    end: endOfDay(selectedDates[1]),
  });
  const onArrowPress = onPress => (isRangePicker ? onPress : undefined);
  return (
    <View style={[styles.container, isDaySelected && styles.onTheTop]}>
      <Touchable
        onPress={handlePress}
        disabled={isDayInPast(day) || isFieldEmpty}
      >
        <>
          {isStartOfSelectedDates && isRangePicker && (
            <RenderArrow
              onPress={onArrowPress(onLeftPress)}
              style={styles.leftArrow}
              direction="left"
            />
          )}
          <View
            style={[
              styles.dayContainer,
              isDaySelected && styles.selectedDatesContainer,
              isStartOfSelectedDates && styles.startOfSelectedDatesContainer,
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
                  {format(day, 'd')}
                </Text>
                {price ?? <DayPrice price={price} />}
              </>
            )}
          </View>
          {isEndOfSelectedDates && isRangePicker && (
            <RenderArrow
              onPress={onArrowPress(onRightPress)}
              style={styles.rightArrow}
              direction="right"
            />
          )}
        </>
      </Touchable>
    </View>
  );
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
    minHeight: designTokens.heightCalendarItem,
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
});
