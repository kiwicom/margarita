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
  +inbound?: ?{|
    +$fragmentRefs: DrawSegmentLine$ref
  |},
  +outbound?: ?{|
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
(node/*: any*/).hash = 'c6afb184447ba42da84cb93c80db4547';
module.exports = node;
