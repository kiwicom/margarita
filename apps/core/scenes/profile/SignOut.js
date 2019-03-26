// @flow

import * as React from 'react';
import { Button } from '@kiwicom/universal-components';

type Props = {|
  +onPress: () => void,
|};

export default function SignOut({ onPress }: Props) {
  return <Button onPress={onPress} label="Sign Out" />;
}
