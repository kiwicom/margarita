/**
 * @flow
 * @relayHash c49948a22c8bf7d6e6b5aaf0d12271fa
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlacePickerContent_locations$ref = any;
export type LocationsByTermInput = {
  term: string
};
export type PlacePickerRendererQueryVariables = {|
  input: LocationsByTermInput
|};
export type PlacePickerRendererQueryResponse = {|
  +$fragmentRefs: PlacePickerContent_locations$ref
|};
export type PlacePickerRendererQuery = {|
  variables: PlacePickerRendererQueryVariables,
  response: PlacePickerRendererQueryResponse,
|};
*/


/*
query PlacePickerRendererQuery(
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
  "name": "PlacePickerRendererQuery",
  "id": null,
  "text": "query PlacePickerRendererQuery(\n  $input: LocationsByTermInput!\n) {\n  ...PlacePickerContent_locations_2VV6jB\n}\n\nfragment PlacePickerContent_locations_2VV6jB on RootQuery {\n  locationsByTerm(input: $input) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlacePickerRendererQuery",
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
    "name": "PlacePickerRendererQuery",
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
(node/*: any*/).hash = '62b7fdcc1fcf8cb0eaec47f5611fb7ca';
module.exports = node;
