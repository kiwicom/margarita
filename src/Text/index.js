import * as React from 'react';
import { Text as RNText, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  },
});


const Text = ({ children }) => <RNText style={styles.title}>{children}</RNText>;

export default Text;
