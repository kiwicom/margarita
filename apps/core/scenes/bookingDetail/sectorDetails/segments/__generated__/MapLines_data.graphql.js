/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MulticitySegmentLines_data$ref = any;
type OneWaySegmentLines_data$ref = any;
type ReturnSegmentLines_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapLines_data$ref: FragmentReference;
declare export opaque type MapLines_data$fragmentType: MapLines_data$ref;
export type MapLines_data = {|
  +__typename: string,
  +$fragmentRefs: OneWaySegmentLines_data$ref & ReturnSegmentLines_data$ref & MulticitySegmentLines_data$ref,
  +$refType: MapLines_data$ref,
|};
export type MapLines_data$data = MapLines_data;
export type MapLines_data$key = {
  +$data?: MapLines_data$data,
  +$fragmentRefs: MapLines_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MapLines_data",
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
      "name": "OneWaySegmentLines_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ReturnSegmentLines_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MulticitySegmentLines_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a0f3bc95b91d6ea41ca277c3393571e6';
module.exports = node;
