// @flow

import { graphql } from '../../services/TestingTools';
import Itineraries from '../../datasets/Itineraries.json';

const routeStopFragment = `
cityName
cityId
time {
  utc
  local
}`;
it('works', async () => {
  fetch.mockResponseOnce(JSON.stringify(Itineraries));
  const query = `query($input: ItinerariesSearchInput!) {

    searchItineraries(input: $input) {
      edges {
        node {
          sectors {
            duration
            stopoverDuration
            segments {
              departure {
                ${routeStopFragment}
              }
              arrival {
                ${routeStopFragment}
              }
            }
            departure {
              ${routeStopFragment}
            }
            arrival {
              ${routeStopFragment}
            }
          }
        }
      }
    }
  }`;
  expect(
    await graphql(query, {
      input: {
        travelFrom: 'OSL',
        dateFrom: '2019-05-15',
      },
    }),
  ).toMatchSnapshot();
});
