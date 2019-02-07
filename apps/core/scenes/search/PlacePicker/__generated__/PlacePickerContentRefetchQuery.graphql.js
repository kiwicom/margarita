/**
 * @flow
 * @relayHash 8be6f9bc2b7c44b22060dce01261331a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlacePickerContent_locations$ref = any;
export type LocationsByTermInput = {
  term: string
};
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
    edges {
      node {
        id
        name
        locationId
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PlacePickerContentRefetchQuery",
  "id": null,
  "text": "query PlacePickerContentRefetchQuery(\n  $input: LocationsByTermInput!\n) {\n  ...PlacePickerContent_locations_2VV6jB\n}\n\nfragment PlacePickerContent_locations_2VV6jB on RootQuery {\n  locationsByTerm(input: $input) {\n    edges {\n      node {\n        id\n        name\n        locationId\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlacePickerContentRefetchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PlacePickerContent_locations",
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PlacePickerContentRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "locationsByTerm",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "LocationsByTermInput!"
          }
        ],
        "concreteType": "LocationConnection",
        "plural": false,
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
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '446535d2d95d0778f51e7bfecca46dfe';
module.exports = node;
