/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlacePickerRefetchContainer_locations$ref: FragmentReference;
export type PlacePickerRefetchContainer_locations = {|
  +locationsByTerm: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +locationId: ?string,
      |}
    |}>
  |},
  +$refType: PlacePickerRefetchContainer_locations$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PlacePickerRefetchContainer_locations",
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
};
// prettier-ignore
(node/*: any*/).hash = '84eb57c2559cd6f71b9b51fa0c3fd4c0';
module.exports = node;
