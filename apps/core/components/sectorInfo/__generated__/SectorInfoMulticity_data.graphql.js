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
declare export opaque type SectorInfoMulticity_data$fragmentType: SectorInfoMulticity_data$ref;
export type SectorInfoMulticity_data = {|
  +sectors: ?$ReadOnlyArray<?{|
    +$fragmentRefs: SectorInfo_data$ref
  |}>,
  +$refType: SectorInfoMulticity_data$ref,
|};
export type SectorInfoMulticity_data$data = SectorInfoMulticity_data;
export type SectorInfoMulticity_data$key = {
  +$data?: SectorInfoMulticity_data$data,
  +$fragmentRefs: SectorInfoMulticity_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorInfoMulticity_data",
  "type": "MulticityInterface",
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
(node/*: any*/).hash = 'bc095fe18cb352a0abd4e9e16c907311';
module.exports = node;
