// @flow

import * as React from 'react';

export type Props = {|
  +isVisible: boolean,
  +date?: Date,
  +onConfirm: Date => void,
  +onDismiss: () => void,
  +numberOfRenderedMonths: number,
  +labels: {|
    +cancel: React.Node,
    +confirm: React.Node,
  |},
|};
