// @flow

import * as React from 'react';
import { shallow, render, fireEvent } from 'react-native-testing-library';
import { TouchableWithoutFeedback } from '@kiwicom/universal-components';

import PassengersButton from '../PassengersButton';

const adults = 2;
const infants = 2;
const onPress = jest.fn();

const { getByType } = render(
  <PassengersButton adults={adults} infants={infants} onPress={onPress} />,
);

it('should execute onPress method', () => {
  fireEvent(getByType(TouchableWithoutFeedback), 'press');
  expect(onPress).toHaveBeenCalledWith(undefined);
});

it('renders', () => {
  expect(
    shallow(
      <PassengersButton adults={adults} infants={infants} onPress={onPress} />,
    ),
  ).toMatchSnapshot();
});
