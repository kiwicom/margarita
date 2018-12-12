// @flow

import * as React from 'react';
import { Text as RNText } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';

const Text = ({ children }: { children: React.Node }) => {
  return <RNText style={styles.text}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    fontSize: 24,
  },
});

export default Text;
