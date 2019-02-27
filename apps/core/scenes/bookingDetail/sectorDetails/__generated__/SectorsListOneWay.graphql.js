/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDetail$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorsListOneWay$ref: FragmentReference;
export type SectorsListOneWay = {|
  +sector: ?{|
    +$fragmentRefs: SectorDetail$ref
  |},
  +$refType: SectorsListOneWay$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorsListOneWay",
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
          "name": "SectorDetail",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6ee5072031570362e3bb95b16dba5e36';
module.exports = node;
