// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { isEqual } from 'react-fast-compare';

import { Text } from '../Text';
import { Modal } from '../Modal';
import { Touchable } from '../Touchable';
import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './RangeDatePickerTypes';
import RangeDatePickerContent from './RangeDatePickerContent';

type State = {
  dates: Array<Date>,
};

const parseDatePropsToState = ({ dates }: Props) => {
  const tempDate = dates ?? [new Date(), new Date()];
  return {
    dates: tempDate,
  };
};

export default class RangeDatePicker extends React.Component<Props, State> {
  // @TODO load price for days

  constructor(props: Props) {
    super(props);

    this.state = {
      dates: props.dates ?? [new Date(), new Date()],
    };
  }

  handleDismiss = () => {
    const { onDismiss } = this.props;
    onDismiss();
    this.setState(parseDatePropsToState(this.props));
  };

  handleConfirm = () => {
    const { onConfirm } = this.props;
    const { dates } = this.state;
    onConfirm(dates);
  };

  handleChangeDate = (dates: Array<Date>) => {
    this.setState({
      dates,
    });
  };

  render() {
    const {
      isVisible,
      labels,
      numberOfRenderedMonths,
      weekStartsOn,
      isRangePicker,
    } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        onRequestClose={this.handleDismiss}
        onBackdropPress={this.handleDismiss}
      >
        <View style={styles.content}>
          <RangeDatePickerContent
            selectedDates={this.state.dates}
            onDayPress={this.handleChangeDate}
            numberOfRenderedMonths={numberOfRenderedMonths}
            weekStartsOn={weekStartsOn}
            isRangePicker={isRangePicker ?? true}
          />
          <View style={styles.buttonsContainer}>
            <Touchable
              onPress={this.handleDismiss}
              style={styles.confirmButton}
            >
              <Text style={styles.buttonText}>{labels.cancel}</Text>
            </Touchable>
            <Touchable
              style={styles.confirmButton}
              onPress={this.handleConfirm}
            >
              <Text style={styles.buttonText}>{labels.confirm}</Text>
            </Touchable>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: parseFloat(defaultTokens.borderRadiusBadge),
    overflow: 'hidden',
  },
  confirmButton: {
    borderColor: defaultTokens.paletteWhite,
    borderTopWidth: StyleSheet.hairlineWidth,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: defaultTokens.paletteProductNormal,
    fontSize: parseFloat(defaultTokens.fontSizeButtonLarge),
    fontWeight: 'normal',
    backgroundColor: 'transparent',
  },
});
