// @flow

import * as React from 'react';
import { TripInput } from '@kiwicom/margarita-components';
import { isSameDay } from 'date-fns';
import {
  Icon,
  RangeDatePicker,
  type RangeDatePickerProps,
  type StylePropType,
  type IconNameType,
} from '@kiwicom/universal-components';

type Props = {|
  +style?: StylePropType,
  onPress: () => void,
  label: string,
  icon: IconNameType,
  value: string,
  ...$Rest<
    RangeDatePickerProps,
    {|
      +onChangeTempDates: (Array<Date>) => void,
    |},
  >,
|};

type State = {|
  tempDates: Array<Date>,
  previousDates: Array<Date>,
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

  onChangeTempDates = (dates: Array<Date>) => {
    this.setState({ tempDates: dates });
  };

  render() {
    const {
      style,
      onPress,
      label,
      icon,
      value,
      isVisible,
      onDismiss,
      onConfirm,
      labels,
      numberOfRenderedMonths,
      weekStartsOn,
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
          onDismiss={onDismiss}
          onChangeTempDates={this.onChangeTempDates}
          labels={labels}
          numberOfRenderedMonths={numberOfRenderedMonths}
          weekStartsOn={weekStartsOn}
        />
      </>
    );
  }
}

export default DatePicker;
