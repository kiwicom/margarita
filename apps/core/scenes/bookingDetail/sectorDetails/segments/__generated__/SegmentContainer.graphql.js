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
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentContainer$ref: FragmentReference;
export type SegmentContainer = {|
  +__typename: string,
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
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b32d3d2b86838454da4d9aa1f9196a6e';
module.exports = node;
