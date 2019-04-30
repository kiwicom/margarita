/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RenderTripSectorItem_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripSectorReturn_itinerary$ref: FragmentReference;
declare export opaque type TripSectorReturn_itinerary$fragmentType: TripSectorReturn_itinerary$ref;
export type TripSectorReturn_itinerary = {|
  +inbound: ?{|
    +$fragmentRefs: RenderTripSectorItem_data$ref
  |},
  +outbound: ?{|
    +$fragmentRefs: RenderTripSectorItem_data$ref
  |},
  +$refType: TripSectorReturn_itinerary$ref,
|};
export type TripSectorReturn_itinerary$data = TripSectorReturn_itinerary;
export type TripSectorReturn_itinerary$key = {
  +$data?: TripSectorReturn_itinerary$data,
  +$fragmentRefs: TripSectorReturn_itinerary$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "RenderTripSectorItem_data",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripSectorReturn_itinerary",
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
(node/*: any*/).hash = 'e1dd8de0893988216871468b49dd11f8';
module.exports = node;
