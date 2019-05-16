// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import PassengerCard from '../PassengerCard';

const name = 'John Doe';
const gender = 'male';
const nationality = 'Russian';
const dateOfBirth = new Date('04-12-1980');
const id = 'DF45SV9';
const insurance = 'Travel Inusurance Name';
const passengerCount = 1;
const bags = [
  {
    quantity: 1,
    dimensions: '11 x 32 x 70 cm',
    weight: '10 kg',
    price: {
      amount: 84,
      currency: 'EUR',
    },
  },
  {
    quantity: 2,
    dimensions: '40 x 52 x 78 cm',
    weight: '10 kg',
    price: {
      amount: 84,
      currency: 'EUR',
    },
  },
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
