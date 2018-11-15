// @flow

import * as React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

type Props = {
  children: React.Node,
};

const Text = ({ children }: Props) => (
  <RNText style={styles.title}>{children}</RNText>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Text;
