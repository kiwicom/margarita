// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import {
  AnywhereResults,
  EmptyResults,
  ResultsList,
} from '@kiwicom/margarita-core';
import { Layout } from '@kiwicom/margarita-components';

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
