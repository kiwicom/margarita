/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BaggageBundle_bagOption$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BaggageBundles_itinerary$ref: FragmentReference;
export type BaggageBundles_itinerary = {|
  +holdBagOptions: ?$ReadOnlyArray<?{|
    +$fragmentRefs: BaggageBundle_bagOption$ref
  |}>,
  +$refType: BaggageBundles_itinerary$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BaggageBundles_itinerary",
  "type": "ItineraryInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "holdBagOptions",
      "storageKey": null,
      "args": null,
      "concreteType": "HoldBagOption",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "BaggageBundle_bagOption",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '63180fdbacd08f45adcc5b927a10cb2c';
module.exports = node;
