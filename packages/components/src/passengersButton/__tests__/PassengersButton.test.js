// @flow

import * as React from 'react';
import { shallow, render, fireEvent } from 'react-native-testing-library';

import PassengersButton from '../PassengersButton';
import TouchableWithoutFeedback from '../../TouchableWithoutFeedback';

const adults = 2;
const infants = 2;
const bags = 1;
const onPress = jest.fn();

const { getByType } = render(
  <PassengersButton
    adults={adults}
    infants={infants}
    bags={bags}
    onPress={onPress}
  />,
);

it('should execute onPress method', () => {
  fireEvent(getByType(TouchableWithoutFeedback), 'press');
  expect(onPress).toHaveBeenCalled();
});

it('renders', () => {
  expect(
    shallow(
      <PassengersButton
        adults={adults}
        infants={infants}
        bags={bags}
        onPress={onPress}
      />,
    ),
  ).toMatchSnapshot();
});
