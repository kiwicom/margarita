// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { designTokens } from '../DesignTokens';
import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';
import type { Props } from './FormFeedbackTypes';

export default function FormFeedback({ children, type }: Props) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.message,
          type === 'error' ? styles.error : styles.default,
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: parseFloat(defaultTokens.marginTopFormFeedback),
    marginStart: parseFloat(defaultTokens.spaceSmall),
  },
  message: {
    fontSize: parseFloat(defaultTokens.fontSizeFormFeedback),
  },
  default: {
    fontWeight: '400',
    color: defaultTokens.colorTextSecondary,
  },
  error: {
    fontWeight: designTokens.fontWeightMedium,
    color: defaultTokens.colorTextError,
  },
});
