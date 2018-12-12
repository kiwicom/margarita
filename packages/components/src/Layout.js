// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Navbar from './Navbar';

type Props = {|
  +children: React.Node | React.ChildrenArray<React.Node>,
|};
/**
 * This component should only be used by web.
 * react-navigation handles layout for mobile
 */
export default function Layout({ children }: Props) {
  return (
    <View style={styles.container}>
      <Navbar />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});
