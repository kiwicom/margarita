// @flow

import * as React from 'react';
import { shallow, render, fireEvent } from 'react-native-testing-library';

import TripTypeButton from '../TripTypeButton';
import TouchableWithoutFeedback from '../../TouchableWithoutFeedback';

const icon = 'flight-direct';
const label = 'One way';
const onPress = jest.fn();

const { getByType } = render(
  <TripTypeButton icon={icon} label={label} onPress={onPress} />,
);

it('should execute onPress method', () => {
  fireEvent(getByType(TouchableWithoutFeedback), 'press');
  expect(onPress).toHaveBeenCalledWith(undefined);
});

it('renders', () => {
  expect(
    shallow(<TripTypeButton icon={icon} label={label} onPress={onPress} />),
  ).toMatchSnapshot();
});
