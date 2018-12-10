// @flow

import * as React from 'react';
import { View } from 'react-native';
import Router from 'next/router';
import { Search } from '@kiwicom/margarita-core';

export default () => (
  <View>
    <Search navigation={{ navigate: url => Router.push(`/${url}`) }} />
  </View>
);
