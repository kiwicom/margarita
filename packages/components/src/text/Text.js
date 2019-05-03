// @flow

import * as React from 'react';
import {
  Text as UniversalComponentsText,
  type StylePropType,
} from '@kiwicom/universal-components';

/**
 * This wrapper is necessary because loading fonts with Expo does not allow using fontWeight and fontStyle
 * cf. https://docs.expo.io/versions/latest/guides/using-custom-fonts/
 */

type Props = {|
  align?: 'left' | 'right' | 'center' | 'justify',
  +children: ?React.Node,
  +dataTest?: string,
  +italic?: boolean,
  numberOfLines?: ?number,
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip',
  size?: 'normal' | 'large' | 'small',
  +style?: StylePropType,
  +uppercase?: boolean,
  +type?:
    | 'attention'
    | 'critical'
    | 'info'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'white',
  +weight?: 'normal' | 'bold',
|};

export default function Text(props: Props) {
  if (props.children == null) {
    return null;
  }
  return <UniversalComponentsText {...props} expo />;
}
