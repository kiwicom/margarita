// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import TripInput from '../TripInput';

const IconMock = () => null;

it('renders', () => {
  expect(
    shallow(
      <TripInput
        onPress={jest.fn()}
        icon={
          // $FlowExpectedError: TripInput expects Icon component
          <IconMock />
        }
        label="label"
        value="value"
      />,
    ),
  ).toMatchSnapshot();
});

it('renders with placeholder', () => {
  expect(
    shallow(
      <TripInput
        onPress={jest.fn()}
        icon={
          // $FlowExpectedError: TripInput expects Icon component
          <IconMock />
        }
        label="label"
        value=""
        placeholder="placeholder"
      />,
    ),
  ).toMatchSnapshot();
});

it('renders correctly with placeholder and value', () => {
  expect(
    shallow(
      <TripInput
        onPress={jest.fn()}
        icon={
          // $FlowExpectedError: TripInput expects Icon component
          <IconMock />
        }
        label="label"
        value="value"
        placeholder="placeholder"
      />,
    ),
  ).toMatchSnapshot();
});
