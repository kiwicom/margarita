/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SegmentMap$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentContainer$ref: FragmentReference;
export type SegmentContainer = {|
  +$fragmentRefs: SegmentMap$ref,
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
      "name": "SegmentMap",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '837ad818ac7d3ae8c3f9020e0512a148';
module.exports = node;
