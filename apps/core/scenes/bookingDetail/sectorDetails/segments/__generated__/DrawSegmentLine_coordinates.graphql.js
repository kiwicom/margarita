/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DrawSegmentLine_coordinates$ref: FragmentReference;
declare export opaque type DrawSegmentLine_coordinates$fragmentType: DrawSegmentLine_coordinates$ref;
export type DrawSegmentLine_coordinates = {
  +stop: ?{
    +coordinates: ?{
      +latitude: ?number,
      +longitude: ?number,
    }
  }
};
export type DrawSegmentLine_coordinates$data = DrawSegmentLine_coordinates;
export type DrawSegmentLine_coordinates$key = {
  +$data?: DrawSegmentLine_coordinates$data,
  +$fragmentRefs: DrawSegmentLine_coordinates$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "DrawSegmentLine_coordinates",
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
(node/*: any*/).hash = 'e68ab242c4f85dab6fc06bfe9af7a396';
module.exports = node;
