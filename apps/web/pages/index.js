// @flow

import * as React from 'react';
import { View } from 'react-native';
import Router from 'next/router';
import { Search } from '@kiwicom/margarita-core';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <View>
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
