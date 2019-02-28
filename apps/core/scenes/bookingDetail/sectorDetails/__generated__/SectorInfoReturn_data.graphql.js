/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FromTo_data$ref = any;
type SectorDates_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorInfoReturn_data$ref: FragmentReference;
export type SectorInfoReturn_data = {|
  +inbound: ?{|
    +$fragmentRefs: SectorDates_data$ref
  |},
  +outbound: ?{|
    +$fragmentRefs: SectorDates_data$ref
  |},
  +$fragmentRefs: FromTo_data$ref,
  +$refType: SectorInfoReturn_data$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "SectorDates_data",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "SectorInfoReturn_data",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FromTo_data",
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
(node/*: any*/).hash = '6a0e54b1d1815b2d718178e3b024a2ad';
module.exports = node;
