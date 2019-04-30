/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorDetail_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorsListMulticity_data$ref: FragmentReference;
declare export opaque type SectorsListMulticity_data$fragmentType: SectorsListMulticity_data$ref;
export type SectorsListMulticity_data = {|
  +sectors: ?$ReadOnlyArray<?{|
    +$fragmentRefs: SectorDetail_data$ref
  |}>,
  +$refType: SectorsListMulticity_data$ref,
|};
export type SectorsListMulticity_data$data = SectorsListMulticity_data;
export type SectorsListMulticity_data$key = {
  +$data?: SectorsListMulticity_data$data,
  +$fragmentRefs: SectorsListMulticity_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorsListMulticity_data",
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
          "name": "SectorDetail_data",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a092143ea3621a98833d74d731be21aa';
module.exports = node;
