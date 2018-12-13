// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  AnywhereResults,
  EmptyResults,
  ResultsList,
} from '@kiwicom/margarita-core';
import { Text } from '@kiwicom/universal-components';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <View>
      <Text>Hello</Text>
      <AnywhereResults />
      <EmptyResults />
      <ResultsList />
    </View>
  </Layout>
);
