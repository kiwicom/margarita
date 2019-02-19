// @flow

import { graphql } from '../../../../services/testingTools/TestingTools';
import locations from '../../__datasets__/locations';

describe('locationsByTerm query', () => {
  it('works', async () => {
    fetch.mockResponseOnce(JSON.stringify(locations));
    const query = `query($input: LocationsByTermInput!) {
      locationsByTerm(input: $input) {
        edges {
          node {
            id
            slug
            name
            countryFlagURL
            city {
              id
              name
            }
          }
        }
      }
    }`;
    expect(
      await graphql(query, {
        input: {
          term: 'Prague',
        },
      }),
    ).toMatchSnapshot();
  });
});
