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
  +sectors: ?$ReadOnlyArray<?{|
    +$fragmentRefs: SectorDetail$ref
  |}>,
  +$refType: SectorsListMulticity$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorsListMulticity",
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
          "name": "SectorDetail",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f75f57703879b59567cf5c5423f8ea35';
module.exports = node;
