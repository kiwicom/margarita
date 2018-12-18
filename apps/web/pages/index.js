// @flow

import * as React from 'react';
import { View } from 'react-native';
import Router from 'next/router';
import { Search } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <View style={styles.page}>
      <Search
        navigation={{
          navigate: (url, params) =>
            // $FlowFixMe - wrong definition in flow-typed
            Router.push({
              pathname: `/${url}`,
              query: params,
            }),
        }}
      />
    </View>
  </Layout>
);
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
