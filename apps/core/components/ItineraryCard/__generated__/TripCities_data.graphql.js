/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type LocationName_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripCities_data$ref: FragmentReference;
declare export opaque type TripCities_data$fragmentType: TripCities_data$ref;
export type TripCities_data = {|
  +arrival: ?{|
    +$fragmentRefs: LocationName_data$ref
  |},
  +departure: ?{|
    +$fragmentRefs: LocationName_data$ref
  |},
  +$refType: TripCities_data$ref,
|};
export type TripCities_data$data = TripCities_data;
export type TripCities_data$key = {
  +$data?: TripCities_data$data,
  +$fragmentRefs: TripCities_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "LocationName_data",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripCities_data",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": (v0/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '79e9f1d12579ce0cc8f090573aeb5fa6';
module.exports = node;
