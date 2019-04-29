/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BaggageBundles_itinerary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengerForm_itinerary$ref: FragmentReference;
export type PassengerForm_itinerary = {|
  +$fragmentRefs: BaggageBundles_itinerary$ref,
  +$refType: PassengerForm_itinerary$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "PassengerForm_itinerary",
  "type": "ItineraryInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "BaggageBundles_itinerary",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '22ff0436f150e57c6678731918c0905e';
module.exports = node;
