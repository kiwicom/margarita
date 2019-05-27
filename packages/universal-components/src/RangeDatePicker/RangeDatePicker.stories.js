// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import {
  boolean,
  text,
  withKnobs,
  object,
  number,
} from '@storybook/addon-knobs';
import { addDays } from 'date-fns';

import { Button } from '../Button';

import { RangeDatePicker } from '.';

type Props = {};

type State = {
  dates: ?$ReadOnlyArray<Date>,
  tempDates: $ReadOnlyArray<Date>,
  nightsInDestination: $ReadOnlyArray<number>,
  isNightsInDestinationSelected: boolean,
  isVisible: boolean,
};

class RangeDatePickerStory extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    const from = addDays(new Date(), 1);
    const to = addDays(new Date(), 3);
    this.state = {
      dates: [from, to],
      tempDates: [from, to],
      nightsInDestination: [3, 6],
      isNightsInDestinationSelected: false,
      isVisible: false,
    };
  }

  onChangeTempDates = tempDates => {
    this.setState({
      tempDates,
    });
  };

  handleConfirmDate = ({ dates }) => {
    this.setState({
      dates,
    });
    this.handleDismiss();
  };

  onNightsInDestinationChange = nightsInDestination => {
    this.setState({
      nightsInDestination,
    });
  };

  onNightsInDestinationSelectionChange = isNightsInDestinationSelected => {
    this.setState({
      isNightsInDestinationSelected,
    });
  };

  handleOpenRangeDatePicker = () => {
    this.setState({
      isVisible: true,
    });
  };

  handleDismiss = () => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    const isChoosingPastDatesEnabled = boolean(
      'isChoosingPastDatesEnabled',
      false,
      'config',
    );
    const isRangePicker = boolean('isRangePicker', true, 'config');
    const isNightsInDestinationVisible = boolean(
      'isNightsInDestinationVisible',
      true,
      'config',
    );
    const dateFormat = text('Date format', 'EEE d MMM');
    const isControlContainerVisible = boolean(
      'isControlContainerVisible',
      true,
      'config',
    );
    const weekStartsOn = number('Week starts on', 1, 'config');
    const label = text('Label', 'Selected date', 'labels');
    const nightsInDestinationLabel = text(
      'nightsInDestinationLabel',
      'Nights',
      'labels',
    );
    const buttonLabels = object(
      'Button labels',
      {
        cancel: 'Cancel',
        confirm: 'Set date',
      },
      'labels',
    );

    const numberOfRenderedMonths = 6;
    const renderFirstMonthFrom = new Date();

    return (
      <>
        <Button
          onPress={this.handleOpenRangeDatePicker}
          label="Open RangeDatePicker"
        />
        <RangeDatePicker
          renderFirstMonthFrom={renderFirstMonthFrom}
          isChoosingPastDatesEnabled={isChoosingPastDatesEnabled}
          isVisible={this.state.isVisible}
          isControlContainerVisible={isControlContainerVisible}
          dates={this.state.tempDates}
          onConfirm={this.handleConfirmDate}
          onDismiss={this.handleDismiss}
          onChangeTempDates={this.onChangeTempDates}
          label={label}
          numberOfRenderedMonths={numberOfRenderedMonths}
          weekStartsOn={weekStartsOn}
          dateFormat={dateFormat}
          isRangePicker={isRangePicker}
          buttonLabels={buttonLabels}
          nightsInDestinationLabel={nightsInDestinationLabel}
          isNightsInDestinationVisible={isNightsInDestinationVisible}
          nightsInDestination={this.state.nightsInDestination}
          onNightsInDestinationChange={this.onNightsInDestinationChange}
          onNightsInDestinationSelectionChange={
            this.onNightsInDestinationSelectionChange
          }
          isNightsInDestinationSelected={
            this.state.isNightsInDestinationSelected
          }
        />
      </>
    );
  }
}

storiesOf('RangeDatePicker', module)
  .addDecorator(withKnobs)
  .add('Playground', () => <RangeDatePickerStory />);
