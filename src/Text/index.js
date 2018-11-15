import * as React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
  },
});

const Text = ({ children }) => <RNText style={styles.title}>{children}</RNText>;

export default Text;
