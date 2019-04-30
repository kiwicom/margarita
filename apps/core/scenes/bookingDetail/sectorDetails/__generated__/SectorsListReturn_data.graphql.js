/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDetail_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorsListReturn_data$ref: FragmentReference;
declare export opaque type SectorsListReturn_data$fragmentType: SectorsListReturn_data$ref;
export type SectorsListReturn_data = {|
  +inbound: ?{|
    +$fragmentRefs: SectorDetail_data$ref
  |},
  +outbound: ?{|
    +$fragmentRefs: SectorDetail_data$ref
  |},
  +$refType: SectorsListReturn_data$ref,
|};
export type SectorsListReturn_data$data = SectorsListReturn_data;
export type SectorsListReturn_data$key = {
  +$data?: SectorsListReturn_data$data,
  +$fragmentRefs: SectorsListReturn_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "SectorDetail_data",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "SectorsListReturn_data",
  "type": "BookingReturn",
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f693e1efeaae5cbb321bfc91b0b3bea9';
module.exports = node;
