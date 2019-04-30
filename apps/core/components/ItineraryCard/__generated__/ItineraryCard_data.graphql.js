/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItineraryDetail_data$ref = any;
type TripSectorOneWay_itinerary$ref = any;
type TripSectorReturn_itinerary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryCard_data$ref: FragmentReference;
declare export opaque type ItineraryCard_data$fragmentType: ItineraryCard_data$ref;
export type ItineraryCard_data = {|
  +__typename: string,
  +price: ?{|
    +currency: ?string,
    +amount: ?number,
  |},
  +$fragmentRefs: ItineraryDetail_data$ref & TripSectorOneWay_itinerary$ref & TripSectorReturn_itinerary$ref,
  +$refType: ItineraryCard_data$ref,
|};
export type ItineraryCard_data$data = ItineraryCard_data;
export type ItineraryCard_data$key = {
  +$data?: ItineraryCard_data$data,
  +$fragmentRefs: ItineraryCard_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItineraryCard_data",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "price",
      "storageKey": null,
      "args": null,
      "concreteType": "Price",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "currency",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "amount",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "ItineraryOneWay",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "TripSectorOneWay_itinerary",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "ItineraryReturn",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "TripSectorReturn_itinerary",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ItineraryDetail_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '279e456765084482148a81e4ba0734a1';
module.exports = node;
