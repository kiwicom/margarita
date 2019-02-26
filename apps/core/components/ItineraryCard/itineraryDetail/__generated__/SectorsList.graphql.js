/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDetail$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorsList$ref: FragmentReference;
export type SectorsList = {|
  +sectors: ?$ReadOnlyArray<?{|
    +$fragmentRefs: SectorDetail$ref
  |}>,
  +$refType: SectorsList$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorsList",
  "type": "Itinerary",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sectors",
      "storageKey": null,
      "args": null,
      "concreteType": "Sector",
      "plural": true,
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
(node/*: any*/).hash = '0989132e60471b5ff078927d5e90f3f0';
module.exports = node;
