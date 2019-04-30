/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItineraryOneWay_itinerary$ref = any;
type ItineraryReturn_itinerary$ref = any;
type SectorInfoOneWay_data$ref = any;
type SectorInfoReturn_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItinerarySectorDetails_itinerary$ref: FragmentReference;
declare export opaque type ItinerarySectorDetails_itinerary$fragmentType: ItinerarySectorDetails_itinerary$ref;
export type ItinerarySectorDetails_itinerary = {|
  +__typename: string,
  +$fragmentRefs: ItineraryOneWay_itinerary$ref & ItineraryReturn_itinerary$ref & SectorInfoOneWay_data$ref & SectorInfoReturn_data$ref,
  +$refType: ItinerarySectorDetails_itinerary$ref,
|};
export type ItinerarySectorDetails_itinerary$data = ItinerarySectorDetails_itinerary;
export type ItinerarySectorDetails_itinerary$key = {
  +$data?: ItinerarySectorDetails_itinerary$data,
  +$fragmentRefs: ItinerarySectorDetails_itinerary$ref,
};
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
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorInfoOneWay_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorInfoReturn_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3a946b072b022ef8cce8d8796ed02696';
module.exports = node;
