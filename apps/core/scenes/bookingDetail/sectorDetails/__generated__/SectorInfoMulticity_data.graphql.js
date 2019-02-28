/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorInfo_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorInfoMulticity_data$ref: FragmentReference;
export type SectorInfoMulticity_data = {|
  +sectors: ?$ReadOnlyArray<?{|
    +$fragmentRefs: SectorInfo_data$ref
  |}>,
  +$refType: SectorInfoMulticity_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorInfoMulticity_data",
  "type": "BookingMulticity",
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
          "name": "SectorInfo_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c3e4446b6ac9881172f5079ca0bb76ec';
module.exports = node;
