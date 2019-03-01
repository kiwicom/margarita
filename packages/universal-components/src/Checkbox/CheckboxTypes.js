// @flow

import * as React from 'react';

export type Props = {|
  +label?: React.Node,
  +value?: string, // this prop is currently used only on web
  +hasError?: boolean,
  +disabled?: boolean,
  +checked?: boolean,
  +name?: string, // this prop is currently used only on web
  +info?: React.Node,
  +onChange?: () => void,
  +children?: React.Node,
|};
