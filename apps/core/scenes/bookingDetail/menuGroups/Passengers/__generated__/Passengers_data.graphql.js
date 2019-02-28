/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PassengersList_data$ref = any;
type VisaDetail_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Passengers_data$ref: FragmentReference;
export type Passengers_data = {|
  +$fragmentRefs: PassengersList_data$ref & VisaDetail_data$ref,
  +$refType: Passengers_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Passengers_data",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PassengersList_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "VisaDetail_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8720b0e076bbd0b5f2daf2f994d5b7e0';
module.exports = node;
