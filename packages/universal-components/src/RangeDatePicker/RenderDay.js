// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { format, isSameDay, isBefore } from 'date-fns';

import { StyleSheet } from '../PlatformStyleSheet';
import { designTokens } from '../DesignTokens';
import { Text } from '../Text';
import { Touchable } from '../Touchable';

type Props = {|
  +day: Date,
  +onPress: Date => void,
  +price?: ?string,
  +selectedDate: Date,
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
  selectedDate,
}: Props) {
  function handlePress() {
    onPress(day);
  }

  const isDaySelected = isSameDay(selectedDate, day);
  const isDayInPast = isBefore(day, new Date());
  const isFieldEmpty = day == null;

  return (
    <View style={styles.container}>
      <Touchable onPress={handlePress} disabled={isDayInPast || isFieldEmpty}>
        <View
          style={[
            styles.dayContainer,
            isDaySelected && styles.selectedDateContainer,
          ]}
        >
          {!isFieldEmpty && (
            <>
              <Text
                weight="bold"
                style={[
                  styles.day,
                  isDaySelected && styles.selectedDateText,
                  isDayInPast && styles.dayInPast,
                ]}
              >
                {format(day, 'd')}
              </Text>
              {price ?? <DayPrice price={price} />}
            </>
          )}
        </View>
      </Touchable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dayContainer: {
    flex: 1,
    minHeight: designTokens.heightCalendarItem,
    alignItems: 'center',
    justifyContent: 'center',
    padding: designTokens.paddingCalendarItem / 2,
    borderWidth: parseFloat(defaultTokens.borderWidthCard),
    borderColor: defaultTokens.backgroundCard,
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
  },
  day: {
    fontSize: designTokens.fontSizeCalendarItem,
  },
  price: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    color: defaultTokens.colorTextSecondary,
  },
  selectedDateContainer: {
    borderColor: designTokens.borderColorCalendarItem,
    backgroundColor: defaultTokens.backgroundButtonInfo,
  },
  selectedDateText: {
    color: defaultTokens.colorTextButtonPrimary,
  },
  dayInPast: {
    color: defaultTokens.colorTextSecondary,
  },
});
