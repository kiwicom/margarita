// @flow

import { graphql } from '../../services/TestingTools';
import locations from '../../datasets/locations';

describe('locationsByTerm query', () => {
  it;
});
it('works', async () => {
  fetch.mockResponseOnce(JSON.stringify(locations));
  const query = `query($input: LocationsByTermInput!) {
      locationsByTerm(input: $input) {
        edges {
          node {
            id
            slug
            name
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
  ).toMatchInlineSnapshot(`
Object {
  "data": Object {
    "locationsByTerm": Object {
      "edges": Array [
        Object {
          "node": Object {
            "id": "TG9jYXRpb246cHJhZ3VlX2N6",
            "name": "Prague",
            "slug": "prague-czechia",
          },
        },
        Object {
          "node": Object {
            "id": "TG9jYXRpb246UFJH",
            "name": "Václav Havel Airport Prague",
            "slug": "vaclav-havel-airport-prague-prague-czechia",
          },
        },
        Object {
          "node": Object {
            "id": "TG9jYXRpb246cHJhZ3VlLWNhc3RsZV9wb2k=",
            "name": "Prague Castle",
            "slug": "prague-castle",
          },
        },
        Object {
          "node": Object {
            "id": "TG9jYXRpb246b2xkLXRvd24tc3F1YXJlLXByYWd1ZV9wb2k=",
            "name": "Old Town Square, Prague",
            "slug": "old-town-square",
          },
        },
        Object {
          "node": Object {
            "id": "TG9jYXRpb246Q1otUFJBRy1QUkE2",
            "name": "Prague ,Hradčanská",
            "slug": "prague-prague-czechia",
          },
        },
        Object {
          "node": Object {
            "id": "TG9jYXRpb246UEZM",
            "name": "Prague - Florenc Bus Station",
            "slug": "florenc-bus-station-prague-czechia",
          },
        },
        Object {
          "node": Object {
            "id": "TG9jYXRpb246Q1otUFJBRy1QUkEy",
            "name": "Prague - Libeň",
            "slug": "prague-liben-prague-czechia",
          },
        },
        Object {
          "node": Object {
            "id": "TG9jYXRpb246Q1otUFJBRy1QUkFH",
            "name": "Prague Anděl",
            "slug": "prague-andel-prague-czechia",
          },
        },
        Object {
          "node": Object {
            "id": "TG9jYXRpb246Q1otUFJBRy1QUkEw",
            "name": "Prague East (Černý Most)",
            "slug": "prague-east-cerny-most-prague-czechia",
          },
        },
        Object {
          "node": Object {
            "id": "TG9jYXRpb246Q1otUFJBRy1QUkE0",
            "name": "Prague Roztyly",
            "slug": "prague-roztyly-prague-czechia",
          },
        },
      ],
    },
  },
}
`);
});
