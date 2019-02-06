/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Header$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripDetails$ref: FragmentReference;
export type TripDetails = {|
  +$fragmentRefs: Header$ref,
  +$refType: TripDetails$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripDetails",
  "type": "CustomerBooking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Header",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3cf1b6f29548f38bbcff51bd26fb8c10';
module.exports = node;
