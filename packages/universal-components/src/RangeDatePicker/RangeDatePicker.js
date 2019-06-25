// @flow

import * as React from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Modal from './components/Modal';
import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './RangeDatePickerTypes';
import RangeDatePickerContent from './RangeDatePickerContent';
import NightsInDestination from './NightsInDestination';
import ControlContainer from './components/ControlContainer';
import { ModalButtons } from '../ModalButtons';

export default class RangeDatePicker extends React.Component<Props> {
  static defaultProps = {
    isNightsInDestinationVisible: false,
    isNightsInDestinationSelected: false,
    isControlContainerVisible: true,
    nightsInDestinationLabel: 'Nights in destination',
    buttonLabels: {
      confirm: 'Set date',
    },
    renderFirstMonthFrom: new Date(),
    weekStartsOn: 1,
    isRangePicker: true,
    isChoosingPastDatesEnabled: false,
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
      isChoosingPastDatesEnabled,
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
      renderFirstMonthFrom,
    } = this.props;

    // We have to use JS-based modal on Android (coverScreen = false), because gestures are not working in native Modal https://github.com/kmagiera/react-native-gesture-handler/issues/139

    return (
      isVisible && (
        <Modal
          isVisible={isVisible}
          onRequestClose={this.handleDismiss}
          onBackdropPress={this.handleDismiss}
          coverScreen={Platform.OS !== 'android'}
        >
          <SafeAreaView style={styles.content}>
            {!isNightsInDestinationSelected || !isNightsInDestinationVisible ? (
              <RangeDatePickerContent
                isChoosingPastDatesEnabled={isChoosingPastDatesEnabled}
                selectedDates={this.props.dates}
                onDayPress={this.handleChangeDate}
                numberOfRenderedMonths={numberOfRenderedMonths}
                weekStartsOn={weekStartsOn}
                isRangePicker={isRangePicker}
                renderFirstMonthFrom={renderFirstMonthFrom}
              />
            ) : (
              <NightsInDestination
                nightsInDestination={nightsInDestination}
                nightsInDestinationLabel={nightsInDestinationLabel}
                onNightsInDestinationChange={
                  this.handleNightsInDestinationChange
                }
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
                    isNightsInDestinationSelected={
                      isNightsInDestinationSelected
                    }
                    onActiveTabChange={this.handleActiveTabChange}
                  />
                </View>
              )}
              <ModalButtons
                labelConfirm={buttonLabels.confirm}
                labelCancel={buttonLabels.cancel}
                onConfirmPress={this.handleConfirm}
                onCancelPress={this.handleDismiss}
              />
            </View>
          </SafeAreaView>
        </Modal>
      )
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
});
