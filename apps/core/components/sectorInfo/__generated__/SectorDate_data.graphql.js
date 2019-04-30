/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorDate_data$ref: FragmentReference;
declare export opaque type SectorDate_data$fragmentType: SectorDate_data$ref;
export type SectorDate_data = {|
  +time: ?{|
    +local: ?any
  |},
  +$refType: SectorDate_data$ref,
|};
export type SectorDate_data$data = SectorDate_data;
export type SectorDate_data$key = {
  +$data?: SectorDate_data$data,
  +$fragmentRefs: SectorDate_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SectorDate_data",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "time",
      "storageKey": null,
      "args": null,
      "concreteType": "DateType",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "local",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7ab292d18f30575b6dd3e6590a43d129';
module.exports = node;
