// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { View } from 'react-native';

import BookingTypeRenderer from '../BookingTypeRenderer';

const getComponent = (type: string) => (
  <BookingTypeRenderer
    type={type}
    oneWayComponent={<View testID="oneWay" />}
    returnComponent={<View testID="return" />}
    multicityComponent={<View testID="multicity" />}
  />
);

it('renders only oneWayComponent for type BOOKING_ONE_WAY', () => {
  const { getByTestId } = render(getComponent('BOOKING_ONE_WAY'));
  expect(getByTestId('oneWay')).toBeDefined();
  expect(() => getByTestId('return')).toThrow();
  expect(() => getByTestId('multicity')).toThrow();
});

it('renders only returnComponent for type BOOKING_RETURN', () => {
  const { getByTestId } = render(getComponent('BOOKING_RETURN'));
  expect(getByTestId('return')).toBeDefined();
  expect(() => getByTestId('multicity')).toThrow();
  expect(() => getByTestId('oneWay')).toThrow();
});

it('renders only multicityComponent for type BOOKING_MULTICITY', () => {
  const { getByTestId } = render(getComponent('BOOKING_MULTICITY'));
  expect(getByTestId('multicity')).toBeDefined();
  expect(() => getByTestId('return')).toThrow();
  expect(() => getByTestId('oneWay')).toThrow();
});

it('render null for other types', () => {
  const { toJSON } = render(getComponent('lol'));
  expect(toJSON()).toBeNull();
});
