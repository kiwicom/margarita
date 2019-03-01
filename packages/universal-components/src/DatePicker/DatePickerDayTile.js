// @flow

import * as React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { StyleSheet } from '../PlatformStyleSheet';
import { Text } from '../Text';
import { Hoverable } from '../Hoverable';

type Props = {|
  +dayId: number,
  +selected?: boolean,
  +disabled?: boolean,
  +onDaySelect: (dayId: number) => void,
|};

type State = {|
  hovered: boolean,
|};

export default class DatePickerDayTile extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hovered: false,
    };
  }

  handleDayPress = () => {
    const { onDaySelect, dayId } = this.props;
    onDaySelect(dayId);
  };

  handleOnMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleOnMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { hovered } = this.state;
    const { dayId, selected, disabled } = this.props;

    if (dayId < 1) {
      return <View style={styles.dayTile} />;
    }

    return (
      <Hoverable
        disabled={selected || disabled}
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
      >
        <TouchableWithoutFeedback
          disabled={selected || disabled}
          onPress={this.handleDayPress}
        >
          <View
            style={[
              styles.dayTile,
              styles.date,
              hovered && styles.dateHovered,
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
      </Hoverable>
    );
  }
}

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
