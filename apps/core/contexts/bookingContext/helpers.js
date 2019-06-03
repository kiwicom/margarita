// @flow

import type { PassengerType } from './BookingContext';

const PASSENGER_FIELDS = [
  'name',
  'lastName',
  'gender',
  'nationality',
  'dateOfBirth',
  'id',
  'insurance',
  'bags',
  'visaRequired',
];

export function createPassengers(count: number): Array<PassengerType> {
  const passengers = Array.from({ length: count });

  return passengers.map<Object>(() =>
    PASSENGER_FIELDS.reduce((acc, field) => ({ ...acc, [field]: null }), {}),
  );
}
