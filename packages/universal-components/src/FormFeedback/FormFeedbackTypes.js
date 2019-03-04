// @flow

import * as React from 'react';

type Type = 'help' | 'error';

export type Props = {|
  +children: React.Node,
  +type?: Type,
|};
