// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Button } from '../Button';
import { Modal } from '../Modal';
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

  handleChangeDate = (dates: $ReadOnlyArray<Date>) => {
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
            <View style={styles.buttonWrapper}>
              <Button
                label={labels.cancel}
                onPress={this.handleDismiss}
                type="secondary"
                style={styles.closeButton}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <Button label={labels.confirm} onPress={this.handleConfirm} />
            </View>
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
  buttonsContainer: {
    margin: parseFloat(defaultTokens.spaceXSmall),
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
  },
  closeButton: {
    marginEnd: parseFloat(defaultTokens.spaceXSmall),
  },
});
