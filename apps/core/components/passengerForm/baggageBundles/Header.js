// @flow

import * as React from 'react';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text } from '@kiwicom/margarita-components';

type Props = {|
  +text: string,
|};

export default function HeaderBaggageBundle({ text }: Props) {
  return (
    <Text uppercase style={styles.header} type="primary" weight="bold">
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: parseFloat(defaultTokens.spaceSmall),
    paddingTop: parseFloat(defaultTokens.spaceSmall),
  },
});
