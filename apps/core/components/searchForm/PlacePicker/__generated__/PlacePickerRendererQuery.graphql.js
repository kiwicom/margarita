/**
 * @flow
 * @relayHash 28bb4d5bd6bf6e37f1476e766c9a1cf3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlacePickerContent_locations$ref = any;
export type PlacePickerRendererQueryVariables = {||};
export type PlacePickerRendererQueryResponse = {|
  +$fragmentRefs: PlacePickerContent_locations$ref
|};
export type PlacePickerRendererQuery = {|
  variables: PlacePickerRendererQueryVariables,
  response: PlacePickerRendererQueryResponse,
|};
*/


/*
query PlacePickerRendererQuery {
  ...PlacePickerContent_locations
}

fragment PlacePickerContent_locations on RootQuery {
  locationsByTerm(input: {term: ""}) {
    __typename
    ... on LocationConnection {
      edges {
        node {
          id
          name
          locationId
          type
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PlacePickerRendererQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PlacePickerContent_locations",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PlacePickerRendererQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locationsByTerm",
        "storageKey": "locationsByTerm(input:{\"term\":\"\"})",
        "args": [
          {
            "kind": "Literal",
            "name": "input",
            "value": {
              "term": ""
            }
          }
        ],
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "LocationConnection",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "LocationEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Location",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "id",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "locationId",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "type",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PlacePickerRendererQuery",
    "id": null,
    "text": "query PlacePickerRendererQuery {\n  ...PlacePickerContent_locations\n}\n\nfragment PlacePickerContent_locations on RootQuery {\n  locationsByTerm(input: {term: \"\"}) {\n    __typename\n    ... on LocationConnection {\n      edges {\n        node {\n          id\n          name\n          locationId\n          type\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '6f9a471dd5d76583e7d3fda2269600a8';
module.exports = node;
