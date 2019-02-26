/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDetail$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorsListMulticity$ref: FragmentReference;
export type SectorsListMulticity = {|
  +sectors?: ?$ReadOnlyArray<?{|
    +$fragmentRefs: SectorDetail$ref
  |}>,
  +$refType: SectorsListMulticity$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorsListMulticity",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingMulticity",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'addcf7db7eb8f9d02550f1fa0520917b';
module.exports = node;
