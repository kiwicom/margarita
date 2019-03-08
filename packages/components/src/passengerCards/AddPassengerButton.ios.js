// @flow

import * as React from 'react';
import { Button } from '@kiwicom/universal-components';

type Props = {|
  +onPress: () => void,
|};

export default function AddPassengerButton({ onPress }: Props) {
  return <Button onPress={onPress} label="Add another passenger" block />;
}
