/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDetail_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ItineraryReturn_itinerary$ref: FragmentReference;
declare export opaque type ItineraryReturn_itinerary$fragmentType: ItineraryReturn_itinerary$ref;
export type ItineraryReturn_itinerary = {|
  +inbound: ?{|
    +$fragmentRefs: SectorDetail_data$ref
  |},
  +outbound: ?{|
    +$fragmentRefs: SectorDetail_data$ref
  |},
  +$refType: ItineraryReturn_itinerary$ref,
|};
export type ItineraryReturn_itinerary$data = ItineraryReturn_itinerary;
export type ItineraryReturn_itinerary$key = {
  +$data?: ItineraryReturn_itinerary$data,
  +$fragmentRefs: ItineraryReturn_itinerary$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "SectorDetail_data",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "ItineraryReturn_itinerary",
  "type": "ItineraryReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "inbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "outbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": false,
      "selections": (v0/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '5321ba5450d7c0df04415a6b40339eb3';
module.exports = node;
