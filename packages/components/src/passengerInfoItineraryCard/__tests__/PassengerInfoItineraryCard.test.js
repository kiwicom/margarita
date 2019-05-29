// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import PassengerInfoItineraryCard from '../PassengerInfoItineraryCard';

const passengerData = {
  infantsAndAdults: {
    infants: 2,
    adults: 3,
  },
  onlyOneInfant: {
    infants: 1,
    adults: 2,
  },
  onlyAdults: {
    infants: 0,
    adults: 1,
  },
};

it('renders correctly with both infants and adults', () => {
  const { infants, adults } = passengerData.infantsAndAdults;
  expect(
    shallow(<PassengerInfoItineraryCard adults={adults} infants={infants} />),
  ).toMatchSnapshot();
});

it('renders with only one infant', () => {
  const { infants, adults } = passengerData.onlyOneInfant;
  expect(
    shallow(<PassengerInfoItineraryCard adults={adults} infants={infants} />),
  ).toMatchSnapshot();
});

it('renders with only adults', () => {
  const { infants, adults } = passengerData.onlyAdults;
  expect(
    shallow(<PassengerInfoItineraryCard adults={adults} infants={infants} />),
  ).toMatchSnapshot();
});
