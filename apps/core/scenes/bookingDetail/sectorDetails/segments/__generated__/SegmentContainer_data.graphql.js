/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorsListMulticity_data$ref = any;
type SectorsListOneWay_data$ref = any;
type SectorsListReturn_data$ref = any;
type SegmentMap_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SegmentContainer_data$ref: FragmentReference;
declare export opaque type SegmentContainer_data$fragmentType: SegmentContainer_data$ref;
export type SegmentContainer_data = {|
  +__typename: string,
  +$fragmentRefs: SectorsListOneWay_data$ref & SectorsListReturn_data$ref & SectorsListMulticity_data$ref & SegmentMap_data$ref,
  +$refType: SegmentContainer_data$ref,
|};
export type SegmentContainer_data$data = SegmentContainer_data;
export type SegmentContainer_data$key = {
  +$data?: SegmentContainer_data$data,
  +$fragmentRefs: SegmentContainer_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SegmentContainer_data",
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
      "name": "SectorsListOneWay_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorsListReturn_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorsListMulticity_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SegmentMap_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd1caa95487e75e483b490254aa75bc84';
module.exports = node;
