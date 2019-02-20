// @flow

import type { StylePropType } from '@kiwicom/universal-components';

export type Props = {|
  +source: {|
    +uri: string,
    +height?: number,
    +width?: number,
  |},
  +style?: StylePropType,
  +resizeMode?: 'cover' | 'contain' | 'stretch',
|};
