/**
 * @flow
 * @relayHash 3cec34816bf3ee8f3534849599f50142
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlacePickerModal_locations$ref = any;
export type PlacePickerQueryRendererQueryVariables = {||};
export type PlacePickerQueryRendererQueryResponse = {|
  +$fragmentRefs: PlacePickerModal_locations$ref
|};
export type PlacePickerQueryRendererQuery = {|
  variables: PlacePickerQueryRendererQueryVariables,
  response: PlacePickerQueryRendererQueryResponse,
|};
*/


/*
query PlacePickerQueryRendererQuery {
  ...PlacePickerModal_locations
}

fragment PlacePickerModal_locations on RootQuery {
  locationsByTerm(input: {term: ""}) {
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PlacePickerQueryRendererQuery",
  "id": null,
  "text": "query PlacePickerQueryRendererQuery {\n  ...PlacePickerModal_locations\n}\n\nfragment PlacePickerModal_locations on RootQuery {\n  locationsByTerm(input: {term: \"\"}) {\n    edges {\n      node {\n        id\n        name\n        slug\n        country {\n          locationId\n          slug\n          id\n        }\n        timezone\n        locationId\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlacePickerQueryRendererQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PlacePickerModal_locations",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PlacePickerQueryRendererQuery",
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
            },
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
                  v0,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "country",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LocationArea",
                    "plural": false,
                    "selections": [
                      v2,
                      v1,
                      v0
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "timezone",
                    "args": null,
                    "storageKey": null
                  },
                  v2
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
(node/*: any*/).hash = 'fc6aae63ec932ee75de4f0ad58439057';
module.exports = node;
