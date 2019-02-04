/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CityName$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FromTo$ref: FragmentReference;
export type FromTo = {|
  +departure: ?{|
    +$fragmentRefs: CityName$ref
  |},
  +arrival: ?{|
    +$fragmentRefs: CityName$ref
  |},
  +$refType: FromTo$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "CityName",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "FromTo",
  "type": "CustomerBooking",
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '49959b403dbc1e28db96672ebf36b119';
module.exports = node;
