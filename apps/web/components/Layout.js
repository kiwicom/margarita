// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import {
  withLayoutContext,
  type LayoutContextState,
} from '@kiwicom/margarita-device';

import Navbar from './Navbar';

type Props = {|
  +layoutReady: boolean,
  +children: React.Node | React.ChildrenArray<React.Node>,
|};
/**
 * This component should only be used by web.
 * react-navigation handles layout for mobile
 */
export const Layout = ({ layoutReady, children }: Props) => {
  return (
    <View style={styles.container}>
      {layoutReady && (
        <>
          <Navbar />
          {children}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    web: {
      overflow: 'auto',
    },
  },
});

const layoutSelect = ({ layoutReady }: LayoutContextState) => ({
  layoutReady,
});

export default withLayoutContext(layoutSelect)(Layout);
