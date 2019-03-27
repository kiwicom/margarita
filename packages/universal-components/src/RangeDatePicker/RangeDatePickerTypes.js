// @flow

import * as React from 'react';

import { type WeekStarts } from './libs';

export type Props = {|
  +isVisible: boolean,
  +date?: Date,
  +onConfirm: Date => void,
  +onDismiss: () => void,
  +numberOfRenderedMonths: number,
  +weekStartsOn: WeekStarts,
  +labels: {|
    +cancel: React.Node,
    +confirm: React.Node,
  |},
|};
