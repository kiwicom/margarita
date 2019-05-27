// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './RangeDatePickerTypes';
import RangeDatePickerContent from './RangeDatePickerContent';
import NightsInDestination from './NightsInDestination';
import ControlContainer from './components/ControlContainer';

export default class RangeDatePicker extends React.Component<Props> {
  // @TODO load price for days

  static defaultProps = {
    isNightsInDestinationVisible: false,
    isNightsInDestinationSelected: false,
    isControlContainerVisible: true,
    nightsInDestinationLabel: 'Nights in destination',
  };

  handleDismiss = () => {
    this.props.onDismiss();
  };

  handleConfirm = () => {
    this.props.onConfirm({
      dates: this.props.dates,
      isNightsInDestinationSelected: this.props.isNightsInDestinationSelected,
      nightsInDestination: this.props.nightsInDestination,
    });
  };

  handleChangeDate = (dates: $ReadOnlyArray<Date>) => {
    this.props.onChangeTempDates(dates);
  };

  handleActiveTabChange = (tabId: number) => {
    if (this.props.onNightsInDestinationSelectionChange) {
      this.props.onNightsInDestinationSelectionChange(tabId === 1);
    }
  };

  handleNightsInDestinationChange = (nightsInDestination: Array<number>) => {
    if (this.props.onNightsInDestinationChange) {
      this.props.onNightsInDestinationChange(nightsInDestination);
    }
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
      isNightsInDestinationVisible,
      nightsInDestination,
      nightsInDestinationLabel,
      isNightsInDestinationSelected,
      isControlContainerVisible,
    } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        onRequestClose={this.handleDismiss}
        onBackdropPress={this.handleDismiss}
      >
        <View style={styles.content}>
          {!isNightsInDestinationSelected || !isNightsInDestinationVisible ? (
            <RangeDatePickerContent
              selectedDates={this.props.dates}
              onDayPress={this.handleChangeDate}
              numberOfRenderedMonths={numberOfRenderedMonths}
              weekStartsOn={weekStartsOn}
              isRangePicker={isRangePicker ?? true}
            />
          ) : (
            <NightsInDestination
              nightsInDestination={nightsInDestination}
              nightsInDestinationLabel={nightsInDestinationLabel}
              onNightsInDestinationChange={this.handleNightsInDestinationChange}
            />
          )}
          <View style={styles.bottomContainer}>
            {isControlContainerVisible && (
              <View style={[styles.controlContainer]}>
                <ControlContainer
                  dates={dates}
                  dateFormat={dateFormat}
                  nightsInDestinationLabel={nightsInDestinationLabel}
                  nightsInDestination={nightsInDestination}
                  isNightsInDestinationVisible={isNightsInDestinationVisible}
                  dateLabel={label}
                  isNightsInDestinationSelected={isNightsInDestinationSelected}
                  onActiveTabChange={this.handleActiveTabChange}
                />
              </View>
            )}
            <View style={styles.row}>
              <View style={styles.buttonWrapper}>
                <Button
                  label={buttonLabels?.cancel ?? 'Cancel'}
                  onPress={this.handleDismiss}
                  type="secondary"
                />
              </View>
              <View style={styles.buttonWrapper}>
                <Button
                  label={buttonLabels?.confirm ?? 'Set date'}
                  onPress={this.handleConfirm}
                  style={styles.confirmButton}
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
      minWidth: 382,
    },
  },
  controlContainer: {
    marginBottom: parseFloat(defaultTokens.spaceXSmall),
    minHeight: 60,
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
  confirmButton: {
    marginStart: parseFloat(defaultTokens.spaceXSmall),
  },
});
