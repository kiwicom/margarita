/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FromTo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfo$ref: FragmentReference;
export type TripInfo = {|
  +$fragmentRefs: FromTo$ref,
  +$refType: TripInfo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripInfo",
  "type": "CustomerBooking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FromTo",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '237ab93fa4a63b2fe092a67ff0c6200e';
module.exports = node;
