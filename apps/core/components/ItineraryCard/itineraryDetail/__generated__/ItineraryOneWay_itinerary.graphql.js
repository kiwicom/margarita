/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDetail_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryOneWay_itinerary$ref: FragmentReference;
declare export opaque type ItineraryOneWay_itinerary$fragmentType: ItineraryOneWay_itinerary$ref;
export type ItineraryOneWay_itinerary = {|
  +sector: ?{|
    +$fragmentRefs: SectorDetail_data$ref
  |},
  +$refType: ItineraryOneWay_itinerary$ref,
|};
export type ItineraryOneWay_itinerary$data = ItineraryOneWay_itinerary;
export type ItineraryOneWay_itinerary$key = {
  +$data?: ItineraryOneWay_itinerary$data,
  +$fragmentRefs: ItineraryOneWay_itinerary$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItineraryOneWay_itinerary",
  "type": "ItineraryOneWay",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sector",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "SectorDetail_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8a45a4ee48817606e2231a50b01cea89';
module.exports = node;
