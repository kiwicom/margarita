/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MapLines$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentMap$ref: FragmentReference;
export type SegmentMap = {|
  +segmentLocations: ?$ReadOnlyArray<?{|
    +lat: ?number,
    +lng: ?number,
  |}>,
  +$fragmentRefs: MapLines$ref,
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
      "kind": "FragmentSpread",
      "name": "MapLines",
      "args": null
    },
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
(node/*: any*/).hash = 'bb5302dab5dc33141bc8df0cf96a6755';
module.exports = node;
