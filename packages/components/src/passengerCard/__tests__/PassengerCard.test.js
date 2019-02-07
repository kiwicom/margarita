// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import PassengerCard from '../PassengerCard';

const name = 'John Doe';
const gender = 'male';
const nationality = 'Russian';
const dateOfBirth = '22/04/1980';
const id = 'DF45SV9';
const insurance = 'Travel Inusurance Name';
const passengerCount = 1;
const bags = [
  { count: 2, type: '40x15x30cm, 3kg' },
  { count: 1, type: '55x20x40cm, 8kg' },
];

it('renders with passenger info', () => {
  expect(
    shallow(
      <PassengerCard
        name={name}
        gender={gender}
        nationality={nationality}
        dateOfBirth={dateOfBirth}
        id={id}
        insurance={insurance}
        passengerCount={passengerCount}
        bags={bags}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders blank', () => {
  expect(shallow(<PassengerCard passengerCount={0} />)).toMatchSnapshot();
});
