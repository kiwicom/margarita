// @flow

import * as React from 'react';
import { Platform, View } from 'react-native';

import Loader from './Loader';
import { StyleSheet } from '../PlatformStyleSheet';

export default function PageLoader() {
  return (
    <View style={styles.wrapper}>
      <Loader
        size={Platform.select({
          android: 'large',
          ios: 'small',
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
