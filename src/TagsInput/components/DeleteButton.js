// @flow

import * as React from 'react';

import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Touchable } from '../../Touchable';

import { Icon } from '../../Icon';

import { type StylePropType } from '../../PlatformStyleSheet/StyleTypes';

type Props = {|
  +onPress: () => void,
  +disabled?: boolean,
  +style: ?StylePropType,
|};

export default class DeleteButton extends React.PureComponent<Props> {
  render() {
    const { onPress, disabled, style } = this.props;
    return (
      <Touchable
        testID="delete-button"
        onPress={onPress}
        disabled={disabled}
        style={style}
      >
        <Icon
          name="close"
          color={defaultTokens.colorIconSecondary}
          size="small"
        />
      </Touchable>
    );
  }
}
