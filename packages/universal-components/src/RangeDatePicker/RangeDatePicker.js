// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './RangeDatePickerTypes';
import RangeDatePickerContent from './RangeDatePickerContent';
import ControlContainer from './components/ControlContainer';

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
      label,
      buttonLabels,
      numberOfRenderedMonths,
      weekStartsOn,
      isRangePicker,
      dates,
      dateFormat,
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
          <View style={styles.bottomContainer}>
            <View style={[styles.controlContainer]}>
              <ControlContainer
                label={label}
                dates={dates}
                dateFormat={dateFormat}
              />
            </View>
            <View style={styles.row}>
              <View style={styles.buttonWrapper}>
                <Button
                  label={buttonLabels.cancel}
                  onPress={this.handleDismiss}
                  type="secondary"
                  style={styles.closeButton}
                />
              </View>
              <View style={styles.buttonWrapper}>
                <Button
                  label={buttonLabels.confirm}
                  onPress={this.handleConfirm}
                />
              </View>
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
    backgroundColor: defaultTokens.backgroundModal,
    borderRadius: parseFloat(defaultTokens.borderRadiusBadge),
    overflow: 'hidden',
    flex: 1,
    web: {
      marginVertical: parseFloat(defaultTokens.spaceSmall),
      maxHeight: 700,
    },
  },
  controlContainer: {
    marginBottom: parseFloat(defaultTokens.spaceXSmall),
  },
  bottomContainer: {
    margin: parseFloat(defaultTokens.spaceXSmall),
  },
  row: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    flex: 1,
  },
  closeButton: {
    marginEnd: parseFloat(defaultTokens.spaceXSmall),
  },
});
