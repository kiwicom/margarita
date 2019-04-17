/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItineraryOneWay_itinerary$ref = any;
type ItineraryReturn_itinerary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItinerarySectorDetails_itinerary$ref: FragmentReference;
export type ItinerarySectorDetails_itinerary = {|
  +__typename: string,
  +$fragmentRefs: ItineraryOneWay_itinerary$ref & ItineraryReturn_itinerary$ref,
  +$refType: ItinerarySectorDetails_itinerary$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItinerarySectorDetails_itinerary",
  "type": "ItineraryInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ItineraryOneWay_itinerary",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ItineraryReturn_itinerary",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd77fce9ed01a7843e9a57f92cd22fb55';
module.exports = node;
