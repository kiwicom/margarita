// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import PassengerCard from '../PassengerCard';

const mockedPassenger = {
  name: 'John',
  lastName: 'Doe',
  gender: 'male',
  nationality: 'Russian',
  dateOfBirth: new Date('04-12-1980'),
  id: 'DF45SV9',
  insurance: 'Travel Inusurance Name',
  bags: [
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
  ],
};

const passengerCount = 1;

it('renders with passenger info', () => {
  expect(
    shallow(
      <PassengerCard
        passenger={mockedPassenger}
        passengerCount={passengerCount}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders blank', () => {
  expect(
    shallow(<PassengerCard passengerCount={0} passenger={null} />),
  ).toMatchSnapshot();
});
