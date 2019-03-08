// @flow

import * as React from 'react';

type Type = 'description' | 'error';

export type Props = {|
  +children: React.Node,
  +type?: Type,
|};
