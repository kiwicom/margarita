// @flow

import * as React from 'react';
import { Payment } from '@kiwicom/margarita-core';

import { withPageRouter } from '../components/withPageRouter';
import Layout from '../components/Layout';

const payment = ({ router }) => {
  return (
    <Layout>
      <Payment {...router.query} />
    </Layout>
  );
};

export default withPageRouter<React.Element<any>>(payment);
