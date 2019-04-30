/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItinerarySectorDetails_itinerary$ref = any;
type ResultDetailPassenger_itinerary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ResultDetailContent_itinerary$ref: FragmentReference;
declare export opaque type ResultDetailContent_itinerary$fragmentType: ResultDetailContent_itinerary$ref;
export type ResultDetailContent_itinerary = {|
  +isChecked: ?boolean,
  +price: ?{|
    +currency: ?string,
    +amount: ?number,
  |},
  +$fragmentRefs: ResultDetailPassenger_itinerary$ref & ItinerarySectorDetails_itinerary$ref,
  +$refType: ResultDetailContent_itinerary$ref,
|};
export type ResultDetailContent_itinerary$data = ResultDetailContent_itinerary;
export type ResultDetailContent_itinerary$key = {
  +$data?: ResultDetailContent_itinerary$data,
  +$fragmentRefs: ResultDetailContent_itinerary$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ResultDetailContent_itinerary",
  "type": "ItineraryInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isChecked",
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
      "kind": "FragmentSpread",
      "name": "ResultDetailPassenger_itinerary",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ItinerarySectorDetails_itinerary",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'da3025b9e0443e5398835d4df3e71b1b';
module.exports = node;
