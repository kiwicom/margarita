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
declare export opaque type TripInfo$ref: FragmentReference;
export type TripInfo = {|
  +$fragmentRefs: FromTo$ref & TripDates$ref,
  +$refType: TripInfo$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TripInfo",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FromTo",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TripDates",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1cd4c30128894edb57016d5e5065d813';
module.exports = node;
