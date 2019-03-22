// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { TouchableWithoutFeedback } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { format, isSameDay, isBefore } from 'date-fns';
import { margaritaTokens } from '@kiwicom/margarita-design-tokens';

import RangeDateConfig from './RangeDateConfig';

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

  return (
    <TouchableWithoutFeedback onPress={handlePress} disabled={isDayInPast}>
      <View
        style={[
          styles.dayContainer,
          isDaySelected && styles.selectedDateContainer,
        ]}
      >
        {day != null && (
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
            {price && <DayPrice price={price} />}
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    minHeight: RangeDateConfig.dayItemHeight,
    alignItems: 'center',
    justifyContent: 'center',
    padding: RangeDateConfig.dayItemSpace / 2,
    borderWidth: parseFloat(defaultTokens.borderWidthCard),
    borderColor: defaultTokens.backgroundCard,
    borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
  },
  day: {
    fontSize: margaritaTokens.fontSizeCalendarItem,
  },
  price: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    color: defaultTokens.colorTextSecondary,
  },
  selectedDateContainer: {
    borderColor: margaritaTokens.borderColorCalendarItem,
    backgroundColor: defaultTokens.backgroundButtonInfo,
  },
  selectedDateText: {
    color: defaultTokens.colorTextButtonPrimary,
  },
  dayInPast: {
    color: defaultTokens.colorTextSecondary,
  },
});
