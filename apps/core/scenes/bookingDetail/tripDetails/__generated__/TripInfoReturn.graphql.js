/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FromTo$ref = any;
type TripDates$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoReturn$ref: FragmentReference;
export type TripInfoReturn = {|
  +inbound?: ?{|
    +$fragmentRefs: TripDates$ref
  |},
  +outbound?: ?{|
    +$fragmentRefs: TripDates$ref
  |},
  +$fragmentRefs: FromTo$ref,
  +$refType: TripInfoReturn$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "TripDates",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripInfoReturn",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingReturn",
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c3c70e9c118e735a2231c852fb8d4354';
module.exports = node;
