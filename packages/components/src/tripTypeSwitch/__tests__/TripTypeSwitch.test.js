// @flow

import * as React from 'react';
import { shallow, render, fireEvent } from 'react-native-testing-library';

import TripTypeSwitch from '../TripTypeSwitch';

const optionsData = {
  Return: {
    icon: 'flight-return',
    label: 'Return',
  },
  OneWay: {
    icon: 'flight-direct',
    label: 'One way',
  },
};
const onSelect = jest.fn();

const { getByText } = render(
  <TripTypeSwitch
    optionsData={optionsData}
    selectedType={'Return'}
    onSelect={onSelect}
  />,
);

it('should execute onSelect method with correct value', () => {
  const testKey = Object.keys(optionsData)[1];
  fireEvent(getByText(optionsData[testKey].label.toUpperCase()), 'press');
  expect(onSelect).toHaveBeenCalledWith(testKey);
});

it('renders', () => {
  expect(
    shallow(
      <TripTypeSwitch
        optionsData={optionsData}
        selectedType={'Return'}
        onSelect={jest.fn()}
      />,
    ),
  ).toMatchSnapshot();
});
