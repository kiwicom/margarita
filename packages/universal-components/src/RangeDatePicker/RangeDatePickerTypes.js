// @flow

import * as React from 'react';

import { type WeekStarts } from './libs';

export type Props = {|
  +isVisible: boolean,
  +dates: $ReadOnlyArray<Date>,
  +onConfirm: ($ReadOnlyArray<Date>) => void,
  +onDismiss: () => void,
  +onChangeTempDates: ($ReadOnlyArray<Date>) => void,
  +isRangePicker?: boolean,
  +numberOfRenderedMonths: number,
  +weekStartsOn: WeekStarts,
  +labels: {|
    +cancel: React.Node,
    +confirm: React.Node,
  |},
|};
