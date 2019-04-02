// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { View } from 'react-native';

import BookingTypeRenderer from '../BookingTypeRenderer';

const getComponent = (type: string) => (
  <BookingTypeRenderer
    type={type}
    oneWayComponent={<View testID="OneWay" />}
    returnComponent={<View testID="Return" />}
    multicityComponent={<View testID="MultiCity" />}
  />
);

it('renders only oneWayComponent for type BookingOneWay', () => {
  const { getByTestId } = render(getComponent('BookingOneWay'));
  expect(getByTestId('OneWay')).toBeDefined();
  expect(() => getByTestId('Return')).toThrow();
  expect(() => getByTestId('MultiCity')).toThrow();
});

it('renders only returnComponent for type BookingReturn', () => {
  const { getByTestId } = render(getComponent('BookingReturn'));
  expect(getByTestId('Return')).toBeDefined();
  expect(() => getByTestId('MultiCity')).toThrow();
  expect(() => getByTestId('OneWay')).toThrow();
});

it('renders only multicityComponent for type BookingMulticity', () => {
  const { getByTestId } = render(getComponent('BookingMulticity'));
  expect(getByTestId('MultiCity')).toBeDefined();
  expect(() => getByTestId('Return')).toThrow();
  expect(() => getByTestId('OneWay')).toThrow();
});

it('render null for other types', () => {
  const { toJSON } = render(getComponent('lol'));
  expect(toJSON()).toBeNull();
});
