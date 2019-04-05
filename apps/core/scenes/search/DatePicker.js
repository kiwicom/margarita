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

type Props = {|
  +dates: $ReadOnlyArray<Date>,
  +icon: IconNameType,
  +isRangePicker?: boolean,
  +isVisible: boolean,
  +label: string,
  +buttonLabels: {|
    +cancel: React.Node,
    +confirm: React.Node,
  |},
  +numberOfRenderedMonths: number,
  +onConfirm: ($ReadOnlyArray<Date>) => void,
  +onDismiss: () => void,
  +onPress: () => void,
  +style?: StylePropType,
  +value: string,
  +weekStartsOn: WeekStartsType,
|};

type State = {|
  tempDates: $ReadOnlyArray<Date>,
  previousDates: $ReadOnlyArray<Date>,
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

  onChangeTempDates = (dates: $ReadOnlyArray<Date>) => {
    this.setState({ tempDates: dates });
  };

  handleDismiss = () => {
    this.props.onDismiss();
    this.setState(state => ({ tempDates: state.previousDates }));
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
          labels={buttonLabels}
          numberOfRenderedMonths={numberOfRenderedMonths}
          weekStartsOn={weekStartsOn}
        />
      </>
    );
  }
}

export default DatePicker;
