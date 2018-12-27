// @flow

import { graphql } from "../../services/TestingTools";

it("works", async () => {
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
        travelFrom: "OSL",
        dateFrom: "2018-12-31"
      }
    })
  ).toMatchInlineSnapshot(`
Object {
  "data": Object {
    "searchItineraries": null,
  },
  "errors": Array [
    [GraphQLError: Cannot read property 'map' of undefined],
  ],
}
`);
});
