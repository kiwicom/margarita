/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Header$ref = any;
type TripInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripDetails$ref: FragmentReference;
export type TripDetails = {|
  +$fragmentRefs: Header$ref & TripInfo$ref,
  +$refType: TripDetails$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripDetails",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Header",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripInfo",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e384704b6b5451b559ac236c7657a753';
module.exports = node;
