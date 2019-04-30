/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type CityName_data$ref = any;
type FromToIcon_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FromTo_data$ref: FragmentReference;
declare export opaque type FromTo_data$fragmentType: FromTo_data$ref;
export type FromTo_data = {|
  +departure: ?{|
    +$fragmentRefs: CityName_data$ref
  |},
  +arrival: ?{|
    +$fragmentRefs: CityName_data$ref
  |},
  +$fragmentRefs: FromToIcon_data$ref,
  +$refType: FromTo_data$ref,
|};
export type FromTo_data$data = FromTo_data;
export type FromTo_data$key = {
  +$data?: FromTo_data$data,
  +$fragmentRefs: FromTo_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "CityName_data",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "FromTo_data",
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
      "name": "FromToIcon_data",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dc247a1f02896ccb3dcae940a54199a8';
module.exports = node;
