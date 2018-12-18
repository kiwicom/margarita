// @flow

import * as React from 'react';
import { shallow, render, fireEvent } from 'react-native-testing-library';
import { Button } from '@kiwicom/universal-components';

import Select from '../Select';

const optionsData = {
  oneWay: {
    icon: 'flight-direct',
    label: 'One way',
  },
  return: {
    icon: 'flight-return',
    label: 'Return',
  },
};
const onSelect = jest.fn();
const onClose = jest.fn();

const { getByType, getByText } = render(
  <Select
    optionsData={optionsData}
    selectedType={Object.keys(optionsData)[0]}
    onSelect={onSelect}
    onClosePress={onClose}
  />,
);

it('renders', () => {
  expect(
    shallow(
      <Select
        optionsData={optionsData}
        selectedType={Object.keys(optionsData)[0]}
        onSelect={jest.fn()}
        onClosePress={jest.fn()}
      />,
    ),
  ).toMatchSnapshot();
});

it('should execute onSelect method with proper value', () => {
  const testKey = Object.keys(optionsData)[1];
  fireEvent(getByText(optionsData[testKey].label), 'press');
  expect(onSelect).toHaveBeenCalledWith(testKey);
});

it('should execute onClosePress method', () => {
  fireEvent(getByType(Button), 'press');
});
