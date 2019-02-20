/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDate$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorDates$ref: FragmentReference;
export type SectorDates = {|
  +departure: ?{|
    +$fragmentRefs: SectorDate$ref
  |},
  +arrival: ?{|
    +$fragmentRefs: SectorDate$ref
  |},
  +duration: ?number,
  +$refType: SectorDates$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "SectorDate",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "SectorDates",
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
(node/*: any*/).hash = '3883937d9be47837e3b713f5aaa09452';
module.exports = node;
