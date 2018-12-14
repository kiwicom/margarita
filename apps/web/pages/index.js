// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Search } from '@kiwicom/margarita-core';
import navigation from '@kiwicom/margarita-navigation/src/web';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <View>
      <Search navigation={navigation} />
    </View>
  </Layout>
);
