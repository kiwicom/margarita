/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
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


const node/*: ConcreteFragment*/ = (function(){
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
  "type": "Trip",
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
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": v0
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
(node/*: any*/).hash = 'ed906bedd33fad48f0f1179926faf63d';
module.exports = node;
