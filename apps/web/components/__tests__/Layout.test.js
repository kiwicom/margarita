// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';
import { View } from 'react-native';

import { Layout } from '../Layout';

it('renders', () => {
  expect(
    shallow(
      <Layout layoutReady>
        <View />
      </Layout>,
    ),
  ).toMatchInlineSnapshot(`
    Object {
      "output": <Component
        style={
          Object {
            "flex": 1,
          }
        }
      >
        <React.Fragment>
          <Navbar />
          <Component />
        </React.Fragment>
      </Component>,
    }
  `);
});

it('renders with multiple children', () => {
  expect(
    shallow(
      <Layout layoutReady>
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
          }
        }
      >
        <React.Fragment>
          <Navbar />
          <Component />
          <Component />
        </React.Fragment>
      </Component>,
    }
  `);
});
