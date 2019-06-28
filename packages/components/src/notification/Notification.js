// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet } from '@kiwicom/universal-components';

type Props = {|
  +message: string,
|};

export default function Notification({ message }: Props) {
  return (
    <View style={styles.root}>
      <Text weight="bold" type="warning">
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    margin: 10,
    padding: 10,
    backgroundColor: 'rgb(253, 240, 227)',
  },
});
