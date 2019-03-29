// @flow

import * as React from 'react';

import { type WeekStarts } from './libs';

export type Props = {|
  +isVisible: boolean,
  +dates?: Array<Date>,
  +onConfirm: (Array<Date>) => void,
  +onDismiss: () => void,
  +isRangePicker?: boolean,
  +numberOfRenderedMonths: number,
  +weekStartsOn: WeekStarts,
  +labels: {|
    +cancel: React.Node,
    +confirm: React.Node,
  |},
|};
