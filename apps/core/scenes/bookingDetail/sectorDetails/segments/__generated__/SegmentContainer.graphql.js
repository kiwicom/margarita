/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorsListMulticity$ref = any;
type SectorsListOneWay$ref = any;
type SectorsListReturn$ref = any;
type SegmentMap$ref = any;
export type BookingType = "BOOKING_MULTICITY" | "BOOKING_ONE_WAY" | "BOOKING_RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentContainer$ref: FragmentReference;
export type SegmentContainer = {|
  +type: ?BookingType,
  +$fragmentRefs: SectorsListOneWay$ref & SectorsListReturn$ref & SectorsListMulticity$ref & SegmentMap$ref,
  +$refType: SegmentContainer$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SegmentContainer",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "SectorsListOneWay",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorsListReturn",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorsListMulticity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SegmentMap",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd547ebecba101b26ec139833bff8728b';
module.exports = node;
