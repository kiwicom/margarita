/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PassengersList$ref = any;
type VisaDetail$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Passengers$ref: FragmentReference;
export type Passengers = {|
  +$fragmentRefs: PassengersList$ref & VisaDetail$ref,
  +$refType: Passengers$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Passengers",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PassengersList",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "VisaDetail",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '951fc68af4ae66cda4ed2dcf5bac580d';
module.exports = node;
