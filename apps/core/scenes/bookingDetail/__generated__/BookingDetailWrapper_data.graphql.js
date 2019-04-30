/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Passengers_data$ref = any;
type SectorDetails_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookingDetailWrapper_data$ref: FragmentReference;
declare export opaque type BookingDetailWrapper_data$fragmentType: BookingDetailWrapper_data$ref;
export type BookingDetailWrapper_data = {|
  +$fragmentRefs: SectorDetails_data$ref & Passengers_data$ref,
  +$refType: BookingDetailWrapper_data$ref,
|};
export type BookingDetailWrapper_data$data = BookingDetailWrapper_data;
export type BookingDetailWrapper_data$key = {
  +$data?: BookingDetailWrapper_data$data,
  +$fragmentRefs: BookingDetailWrapper_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BookingDetailWrapper_data",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "SectorDetails_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Passengers_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e437f4166913debd1df956e0da5e85b5';
module.exports = node;
