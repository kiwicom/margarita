/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type PassengerForm_itinerary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ResultDetailPassenger_itinerary$ref: FragmentReference;
declare export opaque type ResultDetailPassenger_itinerary$fragmentType: ResultDetailPassenger_itinerary$ref;
export type ResultDetailPassenger_itinerary = {|
  +$fragmentRefs: PassengerForm_itinerary$ref,
  +$refType: ResultDetailPassenger_itinerary$ref,
|};
export type ResultDetailPassenger_itinerary$data = ResultDetailPassenger_itinerary;
export type ResultDetailPassenger_itinerary$key = {
  +$data?: ResultDetailPassenger_itinerary$data,
  +$fragmentRefs: ResultDetailPassenger_itinerary$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ResultDetailPassenger_itinerary",
  "type": "ItineraryInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PassengerForm_itinerary",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '19b16f468a81938469969c32dab6e20c';
module.exports = node;
