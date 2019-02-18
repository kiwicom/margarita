/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type LocationName$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripCities$ref: FragmentReference;
export type TripCities = {|
  +arrival: ?{|
    +$fragmentRefs: LocationName$ref
  |},
  +departure: ?{|
    +$fragmentRefs: LocationName$ref
  |},
  +$refType: TripCities$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "LocationName",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripCities",
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
(node/*: any*/).hash = '677c8de83bcae2ff377e5abf9335d059';
module.exports = node;
