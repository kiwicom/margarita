// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, designTokens } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { Props } from './ItineraryDetailWrapperTypes';

export default function ItineraryDetailWrapper({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderColor: designTokens.borderColorInkLight,
    borderTopWidth: parseInt(defaultTokens.borderWidthCard, 10),
  },
});
