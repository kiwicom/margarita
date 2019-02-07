/**
 * @flow
 * @relayHash a8e8290b6c0fbe9223e737bfe2a4c2cb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlacePickerModal_locations$ref = any;
export type LocationsByTermInput = {
  term: string
};
export type PlacePickerModalRefetchQueryVariables = {|
  input: LocationsByTermInput
|};
export type PlacePickerModalRefetchQueryResponse = {|
  +$fragmentRefs: PlacePickerModal_locations$ref
|};
export type PlacePickerModalRefetchQuery = {|
  variables: PlacePickerModalRefetchQueryVariables,
  response: PlacePickerModalRefetchQueryResponse,
|};
*/


/*
query PlacePickerModalRefetchQuery(
  $input: LocationsByTermInput!
) {
  ...PlacePickerModal_locations_2VV6jB
}

fragment PlacePickerModal_locations_2VV6jB on RootQuery {
  locationsByTerm(input: $input) {
    edges {
      node {
        id
        name
        slug
        country {
          locationId
          slug
          id
        }
        timezone
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
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PlacePickerModalRefetchQuery",
  "id": null,
  "text": "query PlacePickerModalRefetchQuery(\n  $input: LocationsByTermInput!\n) {\n  ...PlacePickerModal_locations_2VV6jB\n}\n\nfragment PlacePickerModal_locations_2VV6jB on RootQuery {\n  locationsByTerm(input: $input) {\n    edges {\n      node {\n        id\n        name\n        slug\n        country {\n          locationId\n          slug\n          id\n        }\n        timezone\n        locationId\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlacePickerModalRefetchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PlacePickerModal_locations",
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
    "name": "PlacePickerModalRefetchQuery",
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
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "country",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LocationArea",
                    "plural": false,
                    "selections": [
                      v3,
                      v2,
                      v1
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "timezone",
                    "args": null,
                    "storageKey": null
                  },
                  v3
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
(node/*: any*/).hash = 'db2c712b9e68ca6f850f897ffc1f59c0';
module.exports = node;
