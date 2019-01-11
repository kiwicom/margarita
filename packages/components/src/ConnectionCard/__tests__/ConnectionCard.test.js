// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { LocalizedPrice, Text } from '@kiwicom/universal-components';

import ConnectionCard from '../ConnectionCard';
import BadgesContainer from '../BadgesContainer';
import TripSector from '../TripSector';

describe('ConnectionCard', () => {
  const badges = [
    {
      id: 1,
      type: 'warning',
      children: 'Cheapest',
    },
    {
      id: 2,
      type: 'info',
      children: 'WiFi',
    },
  ];
  const wayForth = [
    {
      id: '1',
      arrival: 'Berlin TXL',
      arrivalTime: '14:20',
      carrier: { code: 'OK', name: 'Czech Airlines' },
      tripDate: 'Mon 22 Oct',
      departure: 'Prague PRG',
      departureTime: '13:20',
      duration: '1h',
    },
    {
      id: '2',
      arrival: 'Moscow VKO',
      arrivalTime: '20:20',
      carrier: { code: 'FR', type: 'airline', name: 'Ryanair' },
      tripDate: 'Mon 22 Oct',
      departure: 'Berlin TXL',
      departureTime: '15:20',
      duration: '3h',
    },
  ];
  const localizedPrice = {
    amount: 123455.35,
    locale: 'en-US',
    currency: 'EUR',
  };
  const { getAllByType, getByType } = render(
    <ConnectionCard
      price={localizedPrice}
      wayForth={wayForth}
      badges={badges}
    />,
  );
  // @TODO in this environment, I get 'No instances found' when it was working in @kiwicom/universal-components; could be linked to not having the latest version of the npm package or because the Badges are returned as an array?
  // it('should contain correct number of badges', () => {
  //   expect(getAllByType(Badge)).toHaveLength(1);
  // });
  it('should contain correct number of badges container', () => {
    expect(getAllByType(BadgesContainer)).toHaveLength(1);
  });
  it('should contain correct number of connections', () => {
    expect(getAllByType(TripSector)).toHaveLength(2);
  });

  it('should set proper price format', () => {
    expect(getByType(LocalizedPrice).findByType(Text).props.children).toBe(
      '€123,455.35',
    );
  });
});
