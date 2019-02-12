/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookingType = "BOOKING_MULTICITY" | "BOOKING_ONE_WAY" | "BOOKING_RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type FromToIcon$ref: FragmentReference;
export type FromToIcon = {|
  +type: ?BookingType,
  +$refType: FromToIcon$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FromToIcon",
  "type": "FromToInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bee4e7c76d3903d5a80d859c4ea630e0';
module.exports = node;
