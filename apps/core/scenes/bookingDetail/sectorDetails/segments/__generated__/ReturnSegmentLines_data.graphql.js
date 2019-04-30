/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type DrawSegmentLine_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ReturnSegmentLines_data$ref: FragmentReference;
declare export opaque type ReturnSegmentLines_data$fragmentType: ReturnSegmentLines_data$ref;
export type ReturnSegmentLines_data = {|
  +inbound: ?{|
    +$fragmentRefs: DrawSegmentLine_data$ref
  |},
  +outbound: ?{|
    +$fragmentRefs: DrawSegmentLine_data$ref
  |},
  +$refType: ReturnSegmentLines_data$ref,
|};
export type ReturnSegmentLines_data$data = ReturnSegmentLines_data;
export type ReturnSegmentLines_data$key = {
  +$data?: ReturnSegmentLines_data$data,
  +$fragmentRefs: ReturnSegmentLines_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "DrawSegmentLine_data",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "ReturnSegmentLines_data",
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
(node/*: any*/).hash = '52b393c84fe9b4b41bf095e974d2b000';
module.exports = node;
