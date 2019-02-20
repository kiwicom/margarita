/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Passengers$ref = any;
type SectorDetails$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookingDetailWrapper$ref: FragmentReference;
export type BookingDetailWrapper = {|
  +$fragmentRefs: SectorDetails$ref & Passengers$ref,
  +$refType: BookingDetailWrapper$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BookingDetailWrapper",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "SectorDetails",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Passengers",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ab3e51008d4dfcbcf92da61f98224ebe';
module.exports = node;
