/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorInfo_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorInfoOneWay_data$ref: FragmentReference;
export type SectorInfoOneWay_data = {|
  +sector: ?{|
    +$fragmentRefs: SectorInfo_data$ref
  |},
  +$refType: SectorInfoOneWay_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorInfoOneWay_data",
  "type": "BookingOneWay",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sector",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "SectorInfo_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '149df0d6725ec74ef42017c168e6732e';
module.exports = node;
