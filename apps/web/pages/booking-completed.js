// @flow

import * as React from 'react';
import { BookingCompleted } from '@kiwicom/margarita-core';

import { withPageRouter } from '../components/withPageRouter';
import Layout from '../components/Layout';

const bookingCompleted = ({ router }) => {
  return (
    <Layout>
      <BookingCompleted {...router.query} />
    </Layout>
  );
};

export default withPageRouter<React.Element<any>>(bookingCompleted);
