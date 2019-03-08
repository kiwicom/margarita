// @flow

import * as React from 'react';
import { Icon, Button } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +onPress: () => void,
|};

export default function AddPassengerButton({ onPress }: Props) {
  return (
    <Button
      onPress={onPress}
      width={parseFloat(defaultTokens.heightButtonNormal)}
      circled
    >
      <Icon name="passenger-add" color={defaultTokens.colorTextButtonPrimary} />
    </Button>
  );
}
