/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TripDate$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripDates$ref: FragmentReference;
export type TripDates = {|
  +departure: ?{|
    +$fragmentRefs: TripDate$ref
  |},
  +arrival: ?{|
    +$fragmentRefs: TripDate$ref
  |},
  +duration: ?number,
  +$refType: TripDates$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "TripDate",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripDates",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": (v0/*: any*/)
    },
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
      "kind": "ScalarField",
      "alias": null,
      "name": "duration",
      "args": null,
      "storageKey": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '8742130b0816add86a9536dd98a840a3';
module.exports = node;
