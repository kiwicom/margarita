/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type LocalTime_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightTimes_data$ref: FragmentReference;
declare export opaque type FlightTimes_data$fragmentType: FlightTimes_data$ref;
export type FlightTimes_data = {|
  +arrival: ?{|
    +$fragmentRefs: LocalTime_data$ref
  |},
  +departure: ?{|
    +$fragmentRefs: LocalTime_data$ref
  |},
  +$refType: FlightTimes_data$ref,
|};
export type FlightTimes_data$data = FlightTimes_data;
export type FlightTimes_data$key = {
  +$data?: FlightTimes_data$data,
  +$fragmentRefs: FlightTimes_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "LocalTime_data",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "FlightTimes_data",
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
(node/*: any*/).hash = '46167c73d8e155a6efbce3f4330fa0e5';
module.exports = node;
