// @flow

import * as React from 'react';
import { View } from 'react-native';
import Router from 'next/router';
import { Search } from '@kiwicom/margarita-core';
import { Layout } from '@kiwicom/margarita-components';

export default () => (
  <Layout>
    <View>
      <Search navigation={{ navigate: url => Router.push(`/${url}`) }} />
    </View>
  </Layout>
);
