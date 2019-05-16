// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { View } from 'react-native';

import { Layout } from '../Layout';

jest.mock('next/router', () => ({
  route: '/active',
}));

it('renders', () => {
  expect(
    render(
      <Layout layoutReady>
        <View />
      </Layout>,
    ),
  ).toMatchSnapshot();
});

it('renders with multiple children', () => {
  expect(
    render(
      <Layout layoutReady>
        <View />
        <View />
      </Layout>,
    ),
  ).toMatchSnapshot();
});
