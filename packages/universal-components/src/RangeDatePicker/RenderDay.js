// @flow

import * as React from 'react';
import { View } from 'react-native';
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

import { StyleSheet } from '../PlatformStyleSheet';
import { designTokens } from '../DesignTokens';
import { Text } from '../Text';
import { Touchable } from '../Touchable';
import DayItemArrow from './DayItemArrow';

type Props = {|
  +day: Date,
  +onPress?: (Array<Date>) => void,
  +price?: ?string,
  +selectedDates: Array<Date>,
  +isRangePicker: boolean,
|};

const DayPrice = ({ price }) => (
  <View>
    <Text numberOfLines={1} style={styles.price}>
      {price}
    </Text>
  </View>
);

export default function RenderDay({
  day,
  onPress,
  price,
  selectedDates,
  isRangePicker,
}: Props) {
  function handlePress() {
    onPress && onPress([day, day]);
  }
  const isDayInPast = checkedDay => isBefore(checkedDay, new Date());
  const onLeftPress = () => {
    const dayBefore = subDays(day, 1);
    if (!isDayInPast(dayBefore)) {
      onPress && onPress([dayBefore, selectedDates[1]]);
    }
  };

  const onRightPress = () => {
    onPress && onPress([selectedDates[0], addDays(day, 1)]);
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
          {isStartOfSelectedDates && (
            <DayItemArrow
              onPress={onArrowPress(onLeftPress)}
              style={styles.leftArrow}
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
          {isEndOfSelectedDates && (
            <DayItemArrow
              onPress={onArrowPress(onRightPress)}
              style={styles.rightArrow}
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
    zIndex: -100,
  },
  onTheTop: {
    zIndex: 100,
  },
  dayContainer: {
    flex: 1,
    minHeight: designTokens.heightCalendarItem,
    alignItems: 'center',
    justifyContent: 'center',
    padding: designTokens.paddingCalendarItem / 2,
    borderTopWidth: parseFloat(defaultTokens.borderWidthCard),
    borderBottomWidth: parseFloat(defaultTokens.borderWidthCard),
    borderColor: 'transparent',
  },
  day: {
    fontSize: designTokens.fontSizeCalendarItem,
  },
  price: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    color: defaultTokens.colorTextSecondary,
  },
  selectedDatesContainer: {
    borderColor: designTokens.borderColorCalendarItem,
    backgroundColor: defaultTokens.backgroundButtonInfo,
  },
  startOfSelectedDatesContainer: {
    borderTopStartRadius: parseFloat(defaultTokens.borderRadiusNormal),
    borderBottomStartRadius: parseFloat(defaultTokens.borderRadiusNormal),
    borderStartWidth: parseFloat(defaultTokens.borderWidthCard),
  },
  endOfSelectedDatesContainer: {
    borderTopEndRadius: parseFloat(defaultTokens.borderRadiusNormal),
    borderBottomEndRadius: parseFloat(defaultTokens.borderRadiusNormal),
    borderEndWidth: parseFloat(defaultTokens.borderWidthCard),
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
  },
  rightArrow: {
    end: 0,
    top: 12,
  },
});
