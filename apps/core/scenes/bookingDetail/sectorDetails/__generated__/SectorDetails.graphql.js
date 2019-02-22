/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Header$ref = any;
type SectorInfoMulticity$ref = any;
type SectorInfoOneWay$ref = any;
type SectorInfoReturn$ref = any;
type SegmentContainer$ref = any;
export type BookingType = "BOOKING_MULTICITY" | "BOOKING_ONE_WAY" | "BOOKING_RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorDetails$ref: FragmentReference;
export type SectorDetails = {|
  +type: ?BookingType,
  +$fragmentRefs: Header$ref & SectorInfoOneWay$ref & SectorInfoMulticity$ref & SectorInfoReturn$ref & SegmentContainer$ref,
  +$refType: SectorDetails$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorDetails",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Header",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorInfoOneWay",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorInfoMulticity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorInfoReturn",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SegmentContainer",
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
(node/*: any*/).hash = 'f2b47b2b052d8e2f96ea7347ddc081ab';
module.exports = node;
