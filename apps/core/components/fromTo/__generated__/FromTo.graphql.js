/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CityName$ref = any;
type FromToIcon$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FromTo$ref: FragmentReference;
export type FromTo = {|
  +departure: ?{|
    +$fragmentRefs: CityName$ref
  |},
  +arrival: ?{|
    +$fragmentRefs: CityName$ref
  |},
  +$fragmentRefs: FromToIcon$ref,
  +$refType: FromTo$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
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
  "type": "FromToInterface",
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
      "kind": "FragmentSpread",
      "name": "FromToIcon",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cac80d27766ea9c87a5e4e4839ea7417';
module.exports = node;
