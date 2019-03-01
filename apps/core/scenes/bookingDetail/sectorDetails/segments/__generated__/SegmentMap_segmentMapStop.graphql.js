/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentMap_segmentMapStop$ref: FragmentReference;
export type SegmentMap_segmentMapStop = {|
  +stop: ?{|
    +locationId: ?string,
    +city: ?{|
      +name: ?string
    |},
    +coordinates: ?{|
      +latitude: ?number,
      +longitude: ?number,
    |},
  |},
  +$refType: SegmentMap_segmentMapStop$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SegmentMap_segmentMapStop",
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
          "kind": "ScalarField",
          "alias": null,
          "name": "locationId",
          "args": null,
          "storageKey": null
        },
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
        },
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
(node/*: any*/).hash = '3b9a11ddcf96dbec110eb9f2e5849808';
module.exports = node;
