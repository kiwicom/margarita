/**
 * @flow
 * @relayHash 685a46e32bdc32b6dc084dcee069adb1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlacePickerRefetchContainer_locations$ref = any;
export type LocationsByTermInput = {
  term: string
};
export type PlacePickerRefetchContainerQueryVariables = {|
  input: LocationsByTermInput
|};
export type PlacePickerRefetchContainerQueryResponse = {|
  +$fragmentRefs: PlacePickerRefetchContainer_locations$ref
|};
export type PlacePickerRefetchContainerQuery = {|
  variables: PlacePickerRefetchContainerQueryVariables,
  response: PlacePickerRefetchContainerQueryResponse,
|};
*/


/*
query PlacePickerRefetchContainerQuery(
  $input: LocationsByTermInput!
) {
  ...PlacePickerRefetchContainer_locations_2VV6jB
}

fragment PlacePickerRefetchContainer_locations_2VV6jB on RootQuery {
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
  "name": "PlacePickerRefetchContainerQuery",
  "id": null,
  "text": "query PlacePickerRefetchContainerQuery(\n  $input: LocationsByTermInput!\n) {\n  ...PlacePickerRefetchContainer_locations_2VV6jB\n}\n\nfragment PlacePickerRefetchContainer_locations_2VV6jB on RootQuery {\n  locationsByTerm(input: $input) {\n    edges {\n      node {\n        id\n        name\n        locationId\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlacePickerRefetchContainerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PlacePickerRefetchContainer_locations",
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
    "name": "PlacePickerRefetchContainerQuery",
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
(node/*: any*/).hash = '18203c5a9b5ac562328b826a92530ef8';
module.exports = node;
