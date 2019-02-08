/**
 * @flow
 * @relayHash 1b69fed2232a91c9d9a8e1c5d2e62fff
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlacePickerRefetchContainer_locations$ref = any;
export type LocationsByTermInput = {
  term: string
};
export type PlacePickerRendererQueryVariables = {|
  input: LocationsByTermInput
|};
export type PlacePickerRendererQueryResponse = {|
  +$fragmentRefs: PlacePickerRefetchContainer_locations$ref
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
  "name": "PlacePickerRendererQuery",
  "id": null,
  "text": "query PlacePickerRendererQuery(\n  $input: LocationsByTermInput!\n) {\n  ...PlacePickerRefetchContainer_locations_2VV6jB\n}\n\nfragment PlacePickerRefetchContainer_locations_2VV6jB on RootQuery {\n  locationsByTerm(input: $input) {\n    edges {\n      node {\n        id\n        name\n        locationId\n      }\n    }\n  }\n}\n",
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
(node/*: any*/).hash = '97f6ca2876b819220bb76699ca31becf';
module.exports = node;
