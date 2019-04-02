// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Text } from '../Text';
import { Modal } from '../Modal';
import { Touchable } from '../Touchable';
import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './RangeDatePickerTypes';
import RangeDatePickerContent from './RangeDatePickerContent';

export default class RangeDatePicker extends React.Component<Props> {
  // @TODO load price for days

  handleDismiss = () => {
    this.props.onDismiss();
  };

  handleConfirm = () => {
    this.props.onConfirm(this.props.dates);
  };

  handleChangeDate = (dates: Array<Date>) => {
    this.props.onChangeTempDates(dates);
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
            selectedDates={this.props.dates}
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
