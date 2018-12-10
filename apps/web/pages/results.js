// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import {
  AnywhereResults,
  EmptyResults,
  ResultsList,
} from '@kiwicom/margarita-core';

export default () => (
  <View>
    <Text>Hello</Text>
    <AnywhereResults />
    <EmptyResults />
    <ResultsList />
  </View>
);
