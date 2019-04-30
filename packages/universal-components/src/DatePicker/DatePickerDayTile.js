// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { Text } from '../Text';
import { withHover } from '../WithHover';

type Props = {|
  +dayId: number,
  +selected?: boolean,
  +disabled?: boolean,
  +onDaySelect: (dayId: number) => void,
  +isHovered: boolean,
  +onMouseLeave: () => void,
  +onMouseEnter: () => void,
|};

class DatePickerDayTile extends React.Component<Props> {
  handleDayPress = () => {
    const { onDaySelect, dayId } = this.props;
    onDaySelect(dayId);
  };

  render() {
    const { dayId, selected, disabled, isHovered } = this.props;

    if (dayId < 1) {
      return <View style={styles.dayTile} />;
    }

    return (
      <TouchableWithoutFeedback
        disabled={selected || disabled}
        onPress={this.handleDayPress}
      >
        <View
          style={[
            styles.dayTile,
            styles.date,
            isHovered && styles.dateHovered,
            selected && styles.selected,
            disabled && styles.disabled,
          ]}
        >
          <Text
            style={[styles.dateLabel, selected && styles.dateLabelSelected]}
          >
            {dayId}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default withHover(DatePickerDayTile);

const styles = StyleSheet.create({
  dayTile: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 30,
    height: 30,
    margin: 2,
  },
  date: { backgroundColor: defaultTokens.backgroundButtonSecondary },
  dateHovered: {
    backgroundColor: defaultTokens.backgroundButtonSecondaryHover,
  },
  selected: { backgroundColor: defaultTokens.paletteBlueNormal },
  disabled: { opacity: 0.4 },
  dateLabel: {
    flex: 1,
    textAlign: 'center',
  },
  dateLabelSelected: { color: defaultTokens.paletteWhite },
});
