// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { ConnectionCard } from '..';
import TripSector from '../TripSector';
import { Badge, LocalizedPrice, Text } from '../..';

describe('ConnectionCard', () => {
  const badges = [
    {
      id: 1,
      type: 'warning',
      children: 'Cheapest',
    },
  ];
  const wayForth = [
    {
      id: 1,
      arrival: 'Berlin TXL',
      arrivalTime: '14:20',
      carrier: { code: 'OK', name: 'Czech Airlines' },
      tripDate: 'Mon 22 Oct',
      departure: 'Prague PRG',
      departureTime: '13:20',
      duration: '1h',
    },
    {
      id: 2,
      arrival: 'Moscow VKO',
      arrivalTime: '20:20',
      carrier: { code: 'FR', type: 'airline', name: 'Ryanair' },
      tripDate: 'Mon 22 Oct',
      departure: 'Berlin TXL',
      departureTime: '15:20',
      duration: '3h',
    },
  ];
  const localizedPrice = '€123,455.35';
  const { getAllByType, getByType } = render(
    <ConnectionCard
      localizedPrice={localizedPrice}
      wayForth={wayForth}
      badges={badges}
    />
  );
  it('should contain correct number of badges', () => {
    expect(getAllByType(Badge)).toHaveLength(1);
  });
  it('should contain correct number of connections', () => {
    expect(getAllByType(TripSector)).toHaveLength(2);
  });

  it('should set proper price format', () => {
    expect(getByType(LocalizedPrice).findByType(Text).props.children).toBe(
      '€123,455.35'
    );
  });
});
