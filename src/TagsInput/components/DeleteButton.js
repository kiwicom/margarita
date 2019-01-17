// @flow

import * as React from 'react';

import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Touchable } from '../../Touchable';

import { Icon } from '../../Icon';

type Props = {|
  +onPress: () => void,
  +opacity: number,
  +disabled?: boolean,
|};

export default class DeleteButton extends React.PureComponent<Props> {
  render() {
    const { onPress, disabled, opacity } = this.props;
    return (
      <Touchable
        testID="delete-button"
        onPress={onPress}
        disabled={disabled}
        style={{ opacity }}
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
