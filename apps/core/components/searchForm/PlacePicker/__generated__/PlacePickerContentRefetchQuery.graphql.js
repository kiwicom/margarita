/**
 * @flow
 * @relayHash e89629af2899b23037f8337d7b283170
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlacePickerContent_locations$ref = any;
export type LocationType = "AIRPORT" | "AUTONOMOUS_TERRITORY" | "BUS_STATION" | "CITY" | "CONTINENT" | "COUNTRY" | "REGION" | "SPECIAL" | "STATION" | "SUBDIVISION" | "%future added value";
export type LocationsByTermInput = {|
  term: string,
  types?: ?$ReadOnlyArray<?LocationType>,
|};
export type PlacePickerContentRefetchQueryVariables = {|
  input: LocationsByTermInput
|};
export type PlacePickerContentRefetchQueryResponse = {|
  +$fragmentRefs: PlacePickerContent_locations$ref
|};
export type PlacePickerContentRefetchQuery = {|
  variables: PlacePickerContentRefetchQueryVariables,
  response: PlacePickerContentRefetchQueryResponse,
|};
*/


/*
query PlacePickerContentRefetchQuery(
  $input: LocationsByTermInput!
) {
  ...PlacePickerContent_locations_2VV6jB
}

fragment PlacePickerContent_locations_2VV6jB on RootQuery {
  locationsByTerm(input: $input) {
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LocationsByTermInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PlacePickerContentRefetchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PlacePickerContent_locations",
        "args": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PlacePickerContentRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locationsByTerm",
        "storageKey": null,
        "args": (v1/*: any*/),
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
    "name": "PlacePickerContentRefetchQuery",
    "id": null,
    "text": "query PlacePickerContentRefetchQuery(\n  $input: LocationsByTermInput!\n) {\n  ...PlacePickerContent_locations_2VV6jB\n}\n\nfragment PlacePickerContent_locations_2VV6jB on RootQuery {\n  locationsByTerm(input: $input) {\n    __typename\n    ... on LocationConnection {\n      edges {\n        node {\n          id\n          name\n          locationId\n          type\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '446535d2d95d0778f51e7bfecca46dfe';
module.exports = node;
