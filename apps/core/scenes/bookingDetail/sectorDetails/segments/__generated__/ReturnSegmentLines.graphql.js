/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DrawSegmentLine$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ReturnSegmentLines$ref: FragmentReference;
export type ReturnSegmentLines = {|
  +inbound: ?{|
    +$fragmentRefs: DrawSegmentLine$ref
  |},
  +outbound: ?{|
    +$fragmentRefs: DrawSegmentLine$ref
  |},
  +$refType: ReturnSegmentLines$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "DrawSegmentLine",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "ReturnSegmentLines",
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
(node/*: any*/).hash = '526edb0809eac5acc0c2b3095b5f5845';
module.exports = node;
