/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripDetails$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookingDetailWrapper$ref: FragmentReference;
export type BookingDetailWrapper = {|
  +$fragmentRefs: TripDetails$ref,
  +$refType: BookingDetailWrapper$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookingDetailWrapper",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "TripDetails",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ed101f4e268459b53644d112774077bf';
module.exports = node;
