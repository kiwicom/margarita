// @flow

import * as React from 'react';
import { StyleSheet } from '@kiwicom/universal-components';
import { View } from 'react-native';

import FromTo from './FromTo';

type Props = {|
  +children: React.Element<typeof FromTo>,
|};

const FromToWrapper = (props: Props) => {
  return <View style={styles.fromToWrapper}>{props.children}</View>;
};

const styles = StyleSheet.create({
  fromToWrapper: {
    marginBottom: 16,
  },
});

export default FromToWrapper;
