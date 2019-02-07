// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { LayoutContextProvider } from '@kiwicom/margarita-utils';

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
    <LayoutContextProvider>
      <View style={styles.container}>
        <Navbar />
        {children}
      </View>
    </LayoutContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});
