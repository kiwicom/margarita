/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDetail_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorsListOneWay_data$ref: FragmentReference;
export type SectorsListOneWay_data = {|
  +sector: ?{|
    +$fragmentRefs: SectorDetail_data$ref
  |},
  +$refType: SectorsListOneWay_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorsListOneWay_data",
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
          "name": "SectorDetail_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2782b836df2bbc4aa9492ea3a89056cb';
module.exports = node;
