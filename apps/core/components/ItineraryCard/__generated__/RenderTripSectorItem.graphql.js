/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TripSector$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RenderTripSectorItem$ref: FragmentReference;
export type RenderTripSectorItem = {|
  +departure: ?{|
    +stop: ?{|
      +city: ?{|
        +name: ?string
      |}
    |}
  |},
  +stopoverDuration: ?number,
  +$fragmentRefs: TripSector$ref,
  +$refType: RenderTripSectorItem$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RenderTripSectorItem",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "stop",
          "storageKey": null,
          "args": null,
          "concreteType": "Location",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "city",
              "storageKey": null,
              "args": null,
              "concreteType": "LocationArea",
              "plural": false,
              "selections": [
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "stopoverDuration",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripSector",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f004d4d791c73b0dd3ea53f0ee2ba2f1';
module.exports = node;
