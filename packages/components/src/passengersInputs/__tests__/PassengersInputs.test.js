// @flow

import * as React from 'react';
import { shallow, render, fireEvent } from 'react-native-testing-library';

import PassengersInputs from '../PassengersInputs';
import {
  updateAdults,
  updateInfants,
  getMaxAdults,
  getMaxInfants,
  getMaxBags,
} from '../PassengersInputsHelpers';

const testData0 = {
  adults: 7,
  infants: 2,
};
const testData1 = {
  adults: 2,
  infants: 1,
};
const onClose = jest.fn();
const onSave = jest.fn();

const { getByText } = render(
  <PassengersInputs
    {...testData0}
    onClosePress={onClose}
    onSavePress={onSave}
  />,
);

it('should execute onClosePress method', () => {
  fireEvent(getByText('Close'), 'press');
  expect(onClose).toHaveBeenCalledTimes(1);
});

it('should execute onSavePress method with proper value', () => {
  fireEvent(getByText('Save'), 'press');
  expect(onSave).toHaveBeenCalledWith(testData0);
});

it('renders', () => {
  expect(
    shallow(
      <PassengersInputs
        adults={1}
        infants={0}
        onClosePress={jest.fn()}
        onSavePress={jest.fn()}
      />,
    ),
  ).toMatchSnapshot();
});

test('updateAdults > should not increase value on increment when max limit is reached', () => {
  expect(updateAdults(testData0, 1)).toMatchObject(testData0);
});

test('updateAdults > should increase value on increment when limit is not reached', () => {
  expect(updateAdults(testData1, 1)).toMatchObject({
    adults: 3,
    infants: 1,
  });
});

test('updateAdults > should return correct value on decrement', () => {
  expect(updateAdults(testData1, -1)).toMatchObject({
    adults: 1,
    infants: 1,
  });
});

test('updateAdults > should properly update all values on decrement when their limits are reached', () => {
  expect(
    updateAdults(
      {
        adults: 4,
        infants: 4,
      },
      -1,
    ),
  ).toMatchObject({
    adults: 3,
    infants: 3,
  });
});

test('updateInfants > should return correct value on increment', () => {
  expect(updateInfants(testData0, 1).infants).toBe(2);
});

test('updateInfants > should return correct value on decrement', () => {
  expect(updateInfants(testData0, -1).infants).toBe(1);
});

test('getMaxAdults > should return correct max value', () => {
  expect(getMaxAdults(testData1)).toBe(8);
});

test('getMaxInfants > should return correct max value', () => {
  expect(getMaxInfants(testData1)).toBe(2);
});

test('getMaxBags > should return correct max value', () => {
  expect(getMaxBags(testData1)).toBe(4);
});
