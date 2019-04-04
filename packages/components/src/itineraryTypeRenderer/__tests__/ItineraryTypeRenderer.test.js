// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { View } from 'react-native';

import ItineraryTypeRenderer from '../ItineraryTypeRenderer';

const getComponent = (type: string) => (
  <ItineraryTypeRenderer
    typename={type}
    oneWayComponent={<View testID="OneWay" />}
    returnComponent={<View testID="Return" />}
  />
);

it('renders only oneWayComponent for type ItineraryOneWay', () => {
  const { getByTestId } = render(getComponent('ItineraryOneWay'));
  expect(getByTestId('OneWay')).toBeDefined();
  expect(() => getByTestId('Return')).toThrow();
});

it('renders only returnComponent for type ItineraryReturn', () => {
  const { getByTestId } = render(getComponent('ItineraryReturn'));
  expect(getByTestId('Return')).toBeDefined();
  expect(() => getByTestId('MultiCity')).toThrow();
});

it('render null for other types', () => {
  const { toJSON } = render(getComponent('lol'));
  expect(toJSON()).toBeNull();
});
