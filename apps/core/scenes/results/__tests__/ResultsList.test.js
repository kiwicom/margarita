// @flow

import * as React from 'react';
import { unwrapContainer } from 'relay-test-utils';
import { create } from 'react-test-renderer';

import WrappedComponent from '../ResultsList';

const ResultsList = unwrapContainer(WrappedComponent);

jest.mock('../../../components/ItineraryCard/ItineraryCard.js');

it('renders', () => {
  const data = {
    edges: [{ node: { id: '1' } }, { node: { id: '2' } }],
  };
  expect(create(<ResultsList data={data} />)).toMatchSnapshot();
});

it('renders with empty input', () => {
  expect(create(<ResultsList data={{ edges: [] }} />)).toMatchSnapshot();
});
