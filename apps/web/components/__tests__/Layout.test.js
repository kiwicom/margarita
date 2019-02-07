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
  "output": <LayoutContextProvider>
    <Component
      style={
        Object {
          "flex": 1,
          "overflow": "hidden",
        }
      }
    >
      <Navbar />
      <Component />
    </Component>
  </LayoutContextProvider>,
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
  "output": <LayoutContextProvider>
    <Component
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
    </Component>
  </LayoutContextProvider>,
}
`);
});
