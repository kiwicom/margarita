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
  "type": "BookingInterface",
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
(node/*: any*/).hash = '9c16274a5f5ecacea3eb0b929032b781';
module.exports = node;
