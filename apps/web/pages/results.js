// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Results } from '@kiwicom/margarita-core';
import { StyleSheet } from '@kiwicom/universal-components';
import { type Router } from 'next/router';

import { withPageRouter } from '../components/withPageRouter';
import Layout from '../components/Layout';

type Props = {
  +router: Router,
};

const results = ({ router }: Props) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Results routerQuery={router.query} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default withPageRouter<{}>(results);
