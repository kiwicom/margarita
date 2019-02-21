// @flow

import * as React from 'react';

export type Props = {|
  +children: React.Node,
  +onClose?: () => void, // this prop is used only on mobile
|};
