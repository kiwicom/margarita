/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DrawSegmentLine_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MulticitySegmentLines_data$ref: FragmentReference;
declare export opaque type MulticitySegmentLines_data$fragmentType: MulticitySegmentLines_data$ref;
export type MulticitySegmentLines_data = {|
  +sectors: ?$ReadOnlyArray<?{|
    +$fragmentRefs: DrawSegmentLine_data$ref
  |}>,
  +$refType: MulticitySegmentLines_data$ref,
|};
export type MulticitySegmentLines_data$data = MulticitySegmentLines_data;
export type MulticitySegmentLines_data$key = {
  +$data?: MulticitySegmentLines_data$data,
  +$fragmentRefs: MulticitySegmentLines_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MulticitySegmentLines_data",
  "type": "BookingMulticity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sectors",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": true,
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
(node/*: any*/).hash = '6c9a8bc083b54e2f846cf793d59d2c97';
module.exports = node;
