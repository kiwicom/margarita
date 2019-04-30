/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Header_data$ref = any;
type SectorInfoMulticity_data$ref = any;
type SectorInfoOneWay_data$ref = any;
type SectorInfoReturn_data$ref = any;
type SegmentContainer_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorDetails_data$ref: FragmentReference;
declare export opaque type SectorDetails_data$fragmentType: SectorDetails_data$ref;
export type SectorDetails_data = {|
  +__typename: string,
  +$fragmentRefs: SectorInfoOneWay_data$ref & SectorInfoReturn_data$ref & SectorInfoMulticity_data$ref & Header_data$ref & SegmentContainer_data$ref,
  +$refType: SectorDetails_data$ref,
|};
export type SectorDetails_data$data = SectorDetails_data;
export type SectorDetails_data$key = {
  +$data?: SectorDetails_data$data,
  +$fragmentRefs: SectorDetails_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorDetails_data",
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
      "name": "SectorInfoOneWay_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorInfoReturn_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorInfoMulticity_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Header_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SegmentContainer_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ac9c8cc62ac4db38ff2c5feef6e7310d';
module.exports = node;
