/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MulticitySegmentLines$ref = any;
type OneWaySegmentLines$ref = any;
type ReturnSegmentLines$ref = any;
export type BookingType = "BOOKING_MULTICITY" | "BOOKING_ONE_WAY" | "BOOKING_RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapLines$ref: FragmentReference;
export type MapLines = {|
  +type: ?BookingType,
  +$fragmentRefs: OneWaySegmentLines$ref & ReturnSegmentLines$ref & MulticitySegmentLines$ref,
  +$refType: MapLines$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MapLines",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "OneWaySegmentLines",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ReturnSegmentLines",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MulticitySegmentLines",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd4693996bfecaa40d89b70cd32c54744';
module.exports = node;
