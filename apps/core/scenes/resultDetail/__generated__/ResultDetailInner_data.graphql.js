/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ResultDetailContent_itinerary$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ResultDetailInner_data$ref: FragmentReference;
export type ResultDetailInner_data = {|
  +checkItinerary: ?{|
    +isChecked: ?boolean,
    +isValid: ?boolean,
    +$fragmentRefs: ResultDetailContent_itinerary$ref,
  |},
  +$refType: ResultDetailInner_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ResultDetailInner_data",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "input",
      "type": "ItineraryCheckInput!",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "checkItinerary",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "input",
          "variableName": "input",
          "type": "ItineraryCheckInput!"
        }
      ],
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isChecked",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isValid",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "ResultDetailContent_itinerary",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '09baa11b372dd55aa4e221d466f266b8';
module.exports = node;
