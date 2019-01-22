// @flow

import { graphql } from '../../services/TestingTools';

it('works', async () => {
  fetch.mockResponseOnce(JSON.stringify({ data: [{ id: 1 }, { id: 2 }] }));
  const query = `query($input: ItinerariesSearchInput!) {

    searchItineraries(input: $input) {
      edges {
        node {
          id
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
  ).toMatchInlineSnapshot(`
Object {
  "data": Object {
    "searchItineraries": Object {
      "edges": Array [
        Object {
          "node": Object {
            "id": "SXRpbmVyYXJ5OjE=",
          },
        },
        Object {
          "node": Object {
            "id": "SXRpbmVyYXJ5OjI=",
          },
        },
      ],
    },
  },
}
`);
});
