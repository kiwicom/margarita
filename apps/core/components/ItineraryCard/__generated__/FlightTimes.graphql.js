/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type LocalTime$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightTimes$ref: FragmentReference;
export type FlightTimes = {|
  +arrival: ?{|
    +$fragmentRefs: LocalTime$ref
  |},
  +departure: ?{|
    +$fragmentRefs: LocalTime$ref
  |},
  +$refType: FlightTimes$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "LocalTime",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "FlightTimes",
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
(node/*: any*/).hash = '05466c6fffdeed0d0bb77e6e99eb9029';
module.exports = node;
