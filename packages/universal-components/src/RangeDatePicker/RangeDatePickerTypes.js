// @flow

import * as React from 'react';

export type WeekStartsType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type Props = {|
  +isVisible: boolean,
  +dates: $ReadOnlyArray<Date>,
  +onConfirm: ($ReadOnlyArray<Date>) => void,
  +onDismiss: () => void,
  +onChangeTempDates: ($ReadOnlyArray<Date>) => void,
  +isRangePicker?: boolean,
  +numberOfRenderedMonths: number,
  +weekStartsOn: WeekStartsType,
  +labels: {|
    +cancel: React.Node,
    +confirm: React.Node,
  |},
|};

export type DayItemPositionType = {| x: number, y: number, day: Date |};

export type MonthDateType = {|
  +year: number,
  +month: number,
|};

export type AnotatedMonthType = {|
  +year: number,
  +month: number,
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
|};

export type XY = {
  +x: number,
  +y: number,
};
