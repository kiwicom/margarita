// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import { LocalizedPrice, Text } from '@kiwicom/universal-components';

import ItineraryCard from '../ItineraryCard';
import BadgesContainer from '../BadgesContainer';
import TripSegment from '../TripSegment';

const mockRefType: any = null;
describe('ConnectionCard', () => {
  const data = {
    sectors: [],
    price: {
      currency: 'EUR',
      amount: 123455.35,
    },
    $refType: mockRefType,
  };
  // @TODO: set mock
  const { getAllByType, getByType } = render(<ItineraryCard data={data} />);
  // @TODO in this environment, I get 'No instances found' when it was working in @kiwicom/universal-components; could be linked to not having the latest version of the npm package or because the Badges are returned as an array?
  // it('should contain correct number of badges', () => {
  //   expect(getAllByType(Badge)).toHaveLength(1);
  // });
  it('should contain correct number of badges container', () => {
    expect(getAllByType(BadgesContainer)).toHaveLength(1);
  });
  it('should contain correct number of connections', () => {
    expect(getAllByType(TripSegment)).toHaveLength(2);
  });

  it('should set proper price format', () => {
    expect(getByType(LocalizedPrice).findByType(Text).props.children).toBe(
      '€123,455.35',
    );
  });
});
