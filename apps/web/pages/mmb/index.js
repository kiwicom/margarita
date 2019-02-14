// @flow

import * as React from 'react';
import { Bookings } from '@kiwicom/margarita-core';

import Layout from '../../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
      <Bookings />
    </Layout>
  );
}
