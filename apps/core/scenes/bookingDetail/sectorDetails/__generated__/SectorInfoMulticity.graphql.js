/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorInfoMulticity$ref: FragmentReference;
export type SectorInfoMulticity = {|
  +sectors: ?$ReadOnlyArray<?{|
    +$fragmentRefs: SectorInfo$ref
  |}>,
  +$refType: SectorInfoMulticity$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorInfoMulticity",
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
          "name": "SectorInfo",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f3065ec58b41da73e0d0de2453aeb715';
module.exports = node;
