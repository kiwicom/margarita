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
  +inbound?: ?{|
    +$fragmentRefs: SectorDetail$ref
  |},
  +outbound?: ?{|
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
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingReturn",
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c8a3b7957286ce031ea3a5ad0ede0bf7';
module.exports = node;
