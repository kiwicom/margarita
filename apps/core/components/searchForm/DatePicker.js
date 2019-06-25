// @flow

import * as React from 'react';
import { TripInput } from '@kiwicom/margarita-components';
import { isSameDay } from 'date-fns';
import {
  Icon,
  RangeDatePicker,
  type WeekStartsType,
  type StylePropType,
  type IconNameType,
} from '@kiwicom/universal-components';
import { LONG_DAY_MONTH_FORMAT } from '@kiwicom/margarita-config';

import { type ConfirmType } from './DatePickerTypes';

type Props = {|
  +dates: $ReadOnlyArray<Date>,
  +icon: IconNameType,
  +isRangePicker?: boolean,
  +isVisible: boolean,
  +label: string,
  +buttonLabels?: {|
    +cancel: string,
    +confirm: string,
  |},
  +numberOfRenderedMonths: number,
  +onConfirm: ConfirmType => void | Promise<void>,
  +onDismiss: () => void,
  +onPress: () => void,
  +style?: StylePropType,
  +value: string,
  +weekStartsOn?: WeekStartsType,
  +isNightsInDestinationVisible?: boolean,
  +isNightsInDestinationSelected: boolean,
  +nightsInDestination: $ReadOnlyArray<number>,
|};

type State = {|
  tempDates: $ReadOnlyArray<Date>,
  previousDates: $ReadOnlyArray<Date>,
  tempNightsInDestination: $ReadOnlyArray<number>,
  tempIsNightsInDestinationSelected: boolean,
|};
const parseDatePropsToState = ({ dates }: Props) => {
  const tempDate = dates ?? [new Date(), new Date()];
  return {
    tempDates: tempDate,
    previousDates: tempDate,
  };
};
class DatePicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tempDates: props.dates,
      previousDates: props.dates,
      tempNightsInDestination: props.nightsInDestination,
      tempIsNightsInDestinationSelected: props.isNightsInDestinationSelected,
    };
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    if (
      !isSameDay(nextProps.dates[0], prevState.previousDates[0]) ||
      !isSameDay(nextProps.dates[1], prevState.previousDates[1])
    ) {
      return parseDatePropsToState(nextProps);
    }
    return null;
  }

  onChangeTempDates = (dates: $ReadOnlyArray<Date>) => {
    this.setState({ tempDates: dates });
  };

  onChangeTempIsNightsInDestinationSelected = (
    isNightsInDestinationSelected: boolean,
  ) => {
    this.setState({
      tempIsNightsInDestinationSelected: isNightsInDestinationSelected,
    });
  };

  onChangeTempNightInDestinations = (
    nightsInDestination: $ReadOnlyArray<number>,
  ) => {
    this.setState({ tempNightsInDestination: nightsInDestination });
  };

  handleDismiss = () => {
    this.props.onDismiss();
    this.setState(state => ({
      tempDates: state.previousDates,
      tempNightsInDestination: this.props.nightsInDestination,
      tempIsNightsInDestinationSelected: this.props
        .isNightsInDestinationSelected,
    }));
  };

  render() {
    const {
      style,
      onPress,
      label,
      icon,
      value,
      isVisible,
      onConfirm,
      buttonLabels,
      numberOfRenderedMonths,
      weekStartsOn,
      isNightsInDestinationVisible,
    } = this.props;
    return (
      <>
        <TripInput
          style={style}
          onPress={onPress}
          label={label}
          icon={<Icon name={icon} />}
          value={value}
        />

        <RangeDatePicker
          isVisible={isVisible}
          dates={this.state.tempDates}
          onConfirm={onConfirm}
          onDismiss={this.handleDismiss}
          onChangeTempDates={this.onChangeTempDates}
          label={label}
          buttonLabels={buttonLabels}
          numberOfRenderedMonths={numberOfRenderedMonths}
          weekStartsOn={weekStartsOn}
          dateFormat={LONG_DAY_MONTH_FORMAT}
          isNightsInDestinationVisible={isNightsInDestinationVisible}
          nightsInDestination={this.state.tempNightsInDestination}
          onNightsInDestinationChange={this.onChangeTempNightInDestinations}
          isNightsInDestinationSelected={
            this.state.tempIsNightsInDestinationSelected
          }
          onNightsInDestinationSelectionChange={
            this.onChangeTempIsNightsInDestinationSelected
          }
        />
      </>
    );
  }
}

export default DatePicker;
