/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentMap$ref: FragmentReference;
export type SegmentMap = {|
  +segmentLocations: ?$ReadOnlyArray<?{|
    +lat: ?number,
    +lng: ?number,
  |}>,
  +$refType: SegmentMap$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SegmentMap",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "segmentLocations",
      "storageKey": null,
      "args": null,
      "concreteType": "Coordinate",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lat",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lng",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2fcaab6c7c9aedbea3682d057bb63f2d';
module.exports = node;
