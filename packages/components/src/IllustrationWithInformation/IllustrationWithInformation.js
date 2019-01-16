// @flow

import React from 'react';
import { View } from 'react-native';
import { Illustration } from '@kiwicom/margarita-components';
import { StyleSheet, Text } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { type IllustrationNameType } from '../Illustration/IllustrationTypes';

type Props = {|
  +text: string,
  +description?: string,
  +illustrationName: IllustrationNameType,
|};

export default function IllustrationWithInformation({
  text,
  illustrationName,
  description,
}: Props) {
  return (
    <View style={styles.container}>
      <Text weight="bold" style={styles.text}>
        {text}
      </Text>
      {description && <Text style={styles.description}>{description}</Text>}
      <Illustration name={illustrationName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
    color: defaultTokens.colorTextAttention,
    paddingBottom: 20,
  },
  description: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    color: defaultTokens.colorTextSecondary,
    paddingBottom: 40,
  },
});
