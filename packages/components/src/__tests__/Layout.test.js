// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';
import { View } from 'react-native';

import Layout from '../Layout';

it('renders', () => {
  expect(
    shallow(
      <Layout>
        <View />
      </Layout>,
    ),
  ).toMatchInlineSnapshot(`
Object {
  "output": <Component
    style={
      Object {
        "flex": 1,
        "overflow": "hidden",
      }
    }
  >
    <Navbar />
    <Component />
  </Component>,
}
`);
});

it('renders with multiple children', () => {
  expect(
    shallow(
      <Layout>
        <View />
        <View />
      </Layout>,
    ),
  ).toMatchInlineSnapshot(`
Object {
  "output": <Component
    style={
      Object {
        "flex": 1,
        "overflow": "hidden",
      }
    }
  >
    <Navbar />
    <Component />
    <Component />
  </Component>,
}
`);
});
