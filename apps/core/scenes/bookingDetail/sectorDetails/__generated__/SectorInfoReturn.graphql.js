/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FromTo$ref = any;
type SectorDates$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorInfoReturn$ref: FragmentReference;
export type SectorInfoReturn = {|
  +inbound: ?{|
    +$fragmentRefs: SectorDates$ref
  |},
  +outbound: ?{|
    +$fragmentRefs: SectorDates$ref
  |},
  +$fragmentRefs: FromTo$ref,
  +$refType: SectorInfoReturn$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "SectorDates",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "SectorInfoReturn",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FromTo",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "inbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "outbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": false,
      "selections": (v0/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '51c8897adfa7963a2180ac6daa2ba255';
module.exports = node;
