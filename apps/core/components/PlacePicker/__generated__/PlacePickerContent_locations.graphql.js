/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type LocationType = "AIRPORT" | "AUTONOMOUS_TERRITORY" | "BUS_STATION" | "CITY" | "CONTINENT" | "COUNTRY" | "REGION" | "SPECIAL" | "STATION" | "SUBDIVISION" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PlacePickerContent_locations$ref: FragmentReference;
export type PlacePickerContent_locations = {|
  +locationsByTerm: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +locationId: ?string,
        +type: ?LocationType,
      |}
    |}>
  |},
  +$refType: PlacePickerContent_locations$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PlacePickerContent_locations",
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
};
// prettier-ignore
(node/*: any*/).hash = 'ab35d4bd6d76a72adbbc19680973ccfd';
module.exports = node;
