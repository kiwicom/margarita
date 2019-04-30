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
declare export opaque type SectorInfoReturn_data$fragmentType: SectorInfoReturn_data$ref;
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
export type SectorInfoReturn_data$data = SectorInfoReturn_data;
export type SectorInfoReturn_data$key = {
  +$data?: SectorInfoReturn_data$data,
  +$fragmentRefs: SectorInfoReturn_data$ref,
};
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
  "type": "ReturnInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
    },
    {
      "kind": "FragmentSpread",
      "name": "FromTo_data",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '00b607093f2e52de1d5907b4319d1b04';
module.exports = node;
