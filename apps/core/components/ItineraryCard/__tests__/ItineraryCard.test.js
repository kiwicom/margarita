// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';
import { QueryRenderer, graphql } from '@kiwicom/relay';

import ItineraryCard from '../ItineraryCard';

const onResponse = props => {
  return <ItineraryCard data={props.searchData.edges[0].node} />;
};
test('ItineraryCard', () => {
  const environment = createMockEnvironment();
  const TestRenderer = () => (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ItineraryCardQuery @relay_test_operation {
          searchData: searchOneWayItineraries(
            input: {
              itinerary: {
                origin: { ids: ["abc"] }
                destination: { ids: ["def"] }
                outboundDate: { start: "2019-01-01" }
              }
            }
          ) {
            edges {
              node {
                ...ItineraryCard_data
              }
            }
          }
        }
      `}
      variables={{}}
      onResponse={onResponse}
    />
  );

  const renderer = create(<TestRenderer />);
  environment.mock.resolveMostRecentOperation(operation =>
    MockPayloadGenerator.generate(operation, {
      Price: () => ({
        amount: 12.2,
        currency: 'EUR',
      }),
      RouteStop: () => ({
        time: {
          local: '2019-01-01',
        },
      }),
    }),
  );

  expect(renderer).toMatchSnapshot();
});
