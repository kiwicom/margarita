// @flow

import * as React from 'react';
import { StyleSheet, Button } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text } from '@kiwicom/margarita-components';

type Props = {|
  +disabled: boolean,
  +onPress: () => void,
|};

export default function SignIn({ disabled, onPress }: Props) {
  return (
    <>
      <Text size="large" type="primary" weight="bold">
        Sign In
      </Text>
      <Text size="small" type="secondary" style={styles.description}>
        Sign in to see your bookings and tickets
      </Text>
      <Button disabled={disabled} onPress={onPress} label="Sign In" />
    </>
  );
}

const styles = StyleSheet.create({
  description: {
    marginVertical: parseInt(defaultTokens.spaceSmall, 10),
  },
});
