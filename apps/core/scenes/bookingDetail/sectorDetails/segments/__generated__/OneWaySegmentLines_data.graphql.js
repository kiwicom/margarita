/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DrawSegmentLine_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type OneWaySegmentLines_data$ref: FragmentReference;
declare export opaque type OneWaySegmentLines_data$fragmentType: OneWaySegmentLines_data$ref;
export type OneWaySegmentLines_data = {|
  +sector: ?{|
    +$fragmentRefs: DrawSegmentLine_data$ref
  |},
  +$refType: OneWaySegmentLines_data$ref,
|};
export type OneWaySegmentLines_data$data = OneWaySegmentLines_data;
export type OneWaySegmentLines_data$key = {
  +$data?: OneWaySegmentLines_data$data,
  +$fragmentRefs: OneWaySegmentLines_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "OneWaySegmentLines_data",
  "type": "BookingOneWay",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sector",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "DrawSegmentLine_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4ccfb42b4064a0d12c1373ad9ca018a9';
module.exports = node;
