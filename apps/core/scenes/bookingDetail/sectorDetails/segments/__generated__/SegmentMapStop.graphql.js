/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentMapStop$ref: FragmentReference;
export type SegmentMapStop = {|
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
  +$refType: SegmentMapStop$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SegmentMapStop",
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
(node/*: any*/).hash = '3f55f973dbdde24161c9a43c6e384e07';
module.exports = node;
