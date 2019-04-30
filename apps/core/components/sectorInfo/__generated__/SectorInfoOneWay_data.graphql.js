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
declare export opaque type SectorInfoOneWay_data$fragmentType: SectorInfoOneWay_data$ref;
export type SectorInfoOneWay_data = {|
  +sector: ?{|
    +$fragmentRefs: SectorInfo_data$ref
  |},
  +$refType: SectorInfoOneWay_data$ref,
|};
export type SectorInfoOneWay_data$data = SectorInfoOneWay_data;
export type SectorInfoOneWay_data$key = {
  +$data?: SectorInfoOneWay_data$data,
  +$fragmentRefs: SectorInfoOneWay_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorInfoOneWay_data",
  "type": "OneWayInterface",
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
(node/*: any*/).hash = '7a36efa0d1bf1bbda1b0cd57a9ec8b7e';
module.exports = node;
