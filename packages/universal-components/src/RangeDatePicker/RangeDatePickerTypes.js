// @flow

export type WeekStartsType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type ConfirmType = {|
  +dates?: $ReadOnlyArray<Date>,
  +isNightsInDestinationSelected?: boolean,
  +nightsInDestination?: $ReadOnlyArray<number>,
|};

export type Props = {|
  +renderFirstMonthFrom: Date,
  +isChoosingPastDatesEnabled: boolean,
  +isVisible: boolean,
  +dates: $ReadOnlyArray<Date>,
  +onConfirm: ConfirmType => void | Promise<void>,
  +onDismiss: () => void,
  +onChangeTempDates: ($ReadOnlyArray<Date>) => void,
  +isRangePicker: boolean,
  +isControlContainerVisible?: boolean,
  +numberOfRenderedMonths: number,
  +weekStartsOn: WeekStartsType,
  +label: string,
  +dateFormat: string,
  +isNightsInDestinationVisible?: boolean,
  +nightsInDestination?: $ReadOnlyArray<number>,
  +onNightsInDestinationChange?: ($ReadOnlyArray<number>) => void,
  +isNightsInDestinationSelected?: boolean,
  +onNightsInDestinationSelectionChange?: boolean => void,
  +buttonLabels: {|
    +cancel: string,
    +confirm: string,
  |},
  +nightsInDestinationLabel?: string,
|};

export type DayItemPositionType = {| x: number, y: number, day: Date |};

export type MonthDateType = {|
  +year: number,
  +month: number,
  +numberOfWeeks: number,
|};

export type AnotatedMonthType = {|
  +year: number,
  +month: number,
  +numberOfWeeks: number,
  +weeks: Array<Array<?Date>>,
|};

export type DayItemSizeType = {|
  +width: number,
  +height: number,
|};
export type GrabbedSideType = 'left' | 'right';

export type FindRelatedItemConfigType = {|
  +grabbedStartDay: Date,
  +selectedDates: $ReadOnlyArray<Date>,
  +dayItemSize: DayItemSizeType,
  +grabbedSide: GrabbedSideType,
  +weekStartsOn: WeekStartsType,
  +isChoosingPastDatesEnabled: boolean,
  +renderedCalendarRange: Array<Date>,
|};

export type XY = {
  +x: number,
  +y: number,
};
