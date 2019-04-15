// @flow

import type { HoldBags, SaveBookingPayloadType } from '../../Booking';
import {
  parseParameters,
  parsePassengers,
  parseHoldBags,
} from '../SaveBooking';
import type { Passenger } from '../../../manageMyBooking/manageMyBooking';

const HoldBagsParam: Array<HoldBags> = [
  { flightID: '341202495', first: 1, second: 1, third: 0 },
  { flightID: '341214132', first: 1, second: 1, third: 0 },
];

const PassengerParam: Array<Passenger> = [
  {
    birthday: '1980-05-04',
    cardNumber: 'D25845822',
    category: 'adults',
    email: 'email.address@gmail.com',
    expiration: '2020-12-10',
    firstname: 'test',
    nationality: 'SE',
    phone: '44 44857282842',
    lastname: 'test',
    title: 'Ms',
    holdBags: HoldBagsParam,
  },
  {
    birthday: '1980-05-04',
    cardNumber: 'D25845222',
    category: 'infants',
    email: 'email.address@gmail.com',
    expiration: '2020-12-10',
    firstname: 'John',
    nationality: 'SE',
    phone: '44 44857282842',
    lastname: 'Smith',
    title: 'Ms',
    holdBags: HoldBagsParam,
  },
];

const Payload: SaveBookingPayloadType = {
  bags: 3,
  bookingToken: 'TestToken',
  passengers: PassengerParam,
  language: 'en',
  locale: 'US',
};

it('Parses the HoldBags parameter correctly', () => {
  expect(parseHoldBags(HoldBagsParam)).toMatchObject({
    '341202495': {
      '1': 1,
      '2': 1,
      '3': 0,
    },
    '341214132': {
      '1': 1,
      '2': 1,
      '3': 0,
    },
  });
});
it('Parses an InputPassenger correctly', () => {
  expect(parsePassengers(PassengerParam)).toMatchObject([
    {
      birthday: '1980-05-04',
      cardno: 'D25845822',
      category: 'adults',
      email: 'email.address@gmail.com',
      expiration: '2020-12-10',
      hold_bags: {
        '341202495': { '1': 1, '2': 1, '3': 0 },
        '341214132': { '1': 1, '2': 1, '3': 0 },
      },
      name: 'test',
      nationality: 'SE',
      phone: '44 44857282842',
      surname: 'test',
      title: 'Ms',
    },
    {
      birthday: '1980-05-04',
      cardno: 'D25845222',
      category: 'infants',
      email: 'email.address@gmail.com',
      expiration: '2020-12-10',
      hold_bags: {
        '341202495': { '1': 1, '2': 1, '3': 0 },
        '341214132': { '1': 1, '2': 1, '3': 0 },
      },
      name: 'John',
      nationality: 'SE',
      phone: '44 44857282842',
      surname: 'Smith',
      title: 'Ms',
    },
  ]);
});

it('Parses the Payload parameters correctly', () =>
  expect(parseParameters(Payload)).toMatchObject({
    booking_token: 'TestToken',
    lang: 'en',
    locale: 'US',
    passengers: [
      {
        birthday: '1980-05-04',
        cardno: 'D25845822',
        category: 'adults',
        email: 'email.address@gmail.com',
        expiration: '2020-12-10',
        hold_bags: {
          '341202495': { '1': 1, '2': 1, '3': 0 },
          '341214132': { '1': 1, '2': 1, '3': 0 },
        },
        name: 'test',
        nationality: 'SE',
        phone: '44 44857282842',
        surname: 'test',
        title: 'Ms',
      },
      {
        birthday: '1980-05-04',
        cardno: 'D25845222',
        category: 'infants',
        email: 'email.address@gmail.com',
        expiration: '2020-12-10',
        hold_bags: {
          '341202495': { '1': 1, '2': 1, '3': 0 },
          '341214132': { '1': 1, '2': 1, '3': 0 },
        },
        name: 'John',
        nationality: 'SE',
        phone: '44 44857282842',
        surname: 'Smith',
        title: 'Ms',
      },
    ],
  }));
