/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PassengersList_data$ref = any;
type VisaInfoSummary_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Passengers_data$ref: FragmentReference;
export type Passengers_data = {|
  +$fragmentRefs: PassengersList_data$ref & VisaInfoSummary_data$ref,
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
      "name": "VisaInfoSummary_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a11f27aae4e1fbce1288c440ef347c00';
module.exports = node;
