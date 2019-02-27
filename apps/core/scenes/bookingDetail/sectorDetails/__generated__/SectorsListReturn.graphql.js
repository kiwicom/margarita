/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDetail$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorsListReturn$ref: FragmentReference;
export type SectorsListReturn = {|
  +inbound: ?{|
    +$fragmentRefs: SectorDetail$ref
  |},
  +outbound: ?{|
    +$fragmentRefs: SectorDetail$ref
  |},
  +$refType: SectorsListReturn$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "SectorDetail",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "SectorsListReturn",
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
(node/*: any*/).hash = 'd5537769375e65635ab7bd9c27d292fd';
module.exports = node;
