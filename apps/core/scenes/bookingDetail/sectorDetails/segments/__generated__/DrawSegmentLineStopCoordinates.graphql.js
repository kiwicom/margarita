/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DrawSegmentLineStopCoordinates$ref: FragmentReference;
export type DrawSegmentLineStopCoordinates = {|
  +stop: ?{|
    +coordinates: ?{|
      +latitude: ?number,
      +longitude: ?number,
    |}
  |},
  +$refType: DrawSegmentLineStopCoordinates$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DrawSegmentLineStopCoordinates",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
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
          "name": "coordinates",
          "storageKey": null,
          "args": null,
          "concreteType": "Coordinate",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": "latitude",
              "name": "lat",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": "longitude",
              "name": "lng",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '060e9f3bc7cbf7cea8520d1ebb4fc8da';
module.exports = node;
