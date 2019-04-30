/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RenderTripSectorItem_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripSectorOneWay_itinerary$ref: FragmentReference;
declare export opaque type TripSectorOneWay_itinerary$fragmentType: TripSectorOneWay_itinerary$ref;
export type TripSectorOneWay_itinerary = {|
  +sector: ?{|
    +$fragmentRefs: RenderTripSectorItem_data$ref
  |},
  +$refType: TripSectorOneWay_itinerary$ref,
|};
export type TripSectorOneWay_itinerary$data = TripSectorOneWay_itinerary;
export type TripSectorOneWay_itinerary$key = {
  +$data?: TripSectorOneWay_itinerary$data,
  +$fragmentRefs: TripSectorOneWay_itinerary$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TripSectorOneWay_itinerary",
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
          "name": "RenderTripSectorItem_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'eb9dadc56b84ce20efcbd0080671bf03';
module.exports = node;
