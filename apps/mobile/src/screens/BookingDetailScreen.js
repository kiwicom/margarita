// @flow

import * as React from 'react';
import { BookingDetail } from '@kiwicom/margarita-core';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { type NavigationScreenProp } from 'react-navigation';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type NavigationParams = {|
  +id: string,
|};

type Props = {|
  +navigation: NavigationScreenProp<NavigationParams>,
|};

export default function BookingsDetailScreen(props: Props) {
  const bookingId = props.navigation.getParam('id');
  return (
    <View style={styles.container}>
      <BookingDetail bookingId={bookingId} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
});
