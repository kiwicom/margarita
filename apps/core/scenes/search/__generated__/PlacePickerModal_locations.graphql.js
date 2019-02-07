/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlacePickerModal_locations$ref: FragmentReference;
export type PlacePickerModal_locations = {|
  +locationsByTerm: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +slug: ?string,
        +country: ?{|
          +locationId: ?string,
          +slug: ?string,
        |},
        +timezone: ?string,
        +locationId: ?string,
      |}
    |}>
  |},
  +$refType: PlacePickerModal_locations$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "PlacePickerModal_locations",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "input",
      "type": "LocationsByTermInput!",
      "defaultValue": {
        "term": ""
      }
    }
  ],
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
                v0,
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "country",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "LocationArea",
                  "plural": false,
                  "selections": [
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
                v1
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ae9eb4c1c0a90b1b4d698001aeb0ec27';
module.exports = node;
