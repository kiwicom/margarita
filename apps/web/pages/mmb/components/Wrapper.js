// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Layout from '../../../components/Layout';

type Props = {|
  +children: React.Node,
|};

export default function MMBWrapper({ children }: Props) {
  return (
    <Layout>
      <View style={styles.wrapper}>{children}</View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: defaultTokens.spaceXSmall,
    marginHorizontal: '25%',
  },
});
