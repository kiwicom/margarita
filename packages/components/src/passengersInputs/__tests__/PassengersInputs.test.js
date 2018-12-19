// @flow

import * as React from 'react';
import { shallow, render, fireEvent } from 'react-native-testing-library';

import PassengersInputs from '../PassengersInputs';
import {
  updateAdults,
  updateInfants,
  updateBags,
  getMaxAdults,
  getMaxInfants,
  getMaxBags,
} from '../PassengersInputsHelpers';

const testData0 = {
  adults: 7,
  infants: 2,
  bags: 14,
};
const testData1 = {
  adults: 2,
  infants: 1,
  bags: 1,
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
        bags={0}
        onClosePress={jest.fn()}
        onSavePress={jest.fn()}
      />,
    ),
  ).toMatchSnapshot();
});

test('updateAdults > should return correct value on increment', () => {
  expect(updateAdults(testData0, 1)).toMatchObject(testData0);
});

test('updateAdults > should return correct value on decrement', () => {
  expect(updateAdults(testData0, -1)).toMatchObject({
    adults: 6,
    infants: 2,
    bags: 12,
  });
});

test('updateInfants > should return correct value on increment', () => {
  expect(updateInfants(testData0, 1).infants).toBe(2);
});

test('updateInfants > should return correct value on decrement', () => {
  expect(updateInfants(testData0, -1).infants).toBe(1);
});

test('updateBags > should return correct value on increment', () => {
  expect(updateBags(testData0, 1).bags).toBe(14);
});

test('updateBags > should return correct value on decrement', () => {
  expect(updateBags(testData0, -1).bags).toBe(13);
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
