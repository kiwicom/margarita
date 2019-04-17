/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ItinerarySectorDetails_itinerary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ResultDetailContent_itinerary$ref: FragmentReference;
export type ResultDetailContent_itinerary = {|
  +isChecked: ?boolean,
  +price: ?{|
    +currency: ?string,
    +amount: ?number,
  |},
  +$fragmentRefs: ItinerarySectorDetails_itinerary$ref,
  +$refType: ResultDetailContent_itinerary$ref,
|};
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
      "name": "ItinerarySectorDetails_itinerary",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '65f0a90761521f5fa595def55fcfc9eb';
module.exports = node;
