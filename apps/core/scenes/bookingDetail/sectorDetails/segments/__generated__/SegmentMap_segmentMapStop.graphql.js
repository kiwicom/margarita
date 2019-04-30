/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentMap_segmentMapStop$ref: FragmentReference;
declare export opaque type SegmentMap_segmentMapStop$fragmentType: SegmentMap_segmentMapStop$ref;
export type SegmentMap_segmentMapStop = {
  +stop: ?{
    +locationId: ?string,
    +city: ?{
      +name: ?string
    },
    +coordinates: ?{
      +latitude: ?number,
      +longitude: ?number,
    },
  }
};
export type SegmentMap_segmentMapStop$data = SegmentMap_segmentMapStop;
export type SegmentMap_segmentMapStop$key = {
  +$data?: SegmentMap_segmentMapStop$data,
  +$fragmentRefs: SegmentMap_segmentMapStop$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SegmentMap_segmentMapStop",
  "type": "RouteStop",
  "metadata": {
    "mask": false
  },
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
(node/*: any*/).hash = 'fca4d730d1e3ef0998a0c659979250d7';
module.exports = node;
