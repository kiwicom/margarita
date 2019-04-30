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
declare export opaque type ItineraryDetail_data$ref: FragmentReference;
declare export opaque type ItineraryDetail_data$fragmentType: ItineraryDetail_data$ref;
export type ItineraryDetail_data = {|
  +__typename: string,
  +bookingToken: ?string,
  +$fragmentRefs: ItineraryOneWay_itinerary$ref & ItineraryReturn_itinerary$ref,
  +$refType: ItineraryDetail_data$ref,
|};
export type ItineraryDetail_data$data = ItineraryDetail_data;
export type ItineraryDetail_data$key = {
  +$data?: ItineraryDetail_data$data,
  +$fragmentRefs: ItineraryDetail_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ItineraryDetail_data",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "bookingToken",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "type": "ItineraryOneWay",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ItineraryOneWay_itinerary",
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
          "name": "ItineraryReturn_itinerary",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1971ffb2113c9ca281096c43704cffcc';
module.exports = node;
