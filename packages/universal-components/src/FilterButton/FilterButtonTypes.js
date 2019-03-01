// @flow

import * as React from 'react';

import { Icon } from '../Icon';

export type Props = {|
  +title: React.Node,
  +isActive: boolean,
  +onPress: () => void,
  +icon?: React.Element<typeof Icon>,
|};
