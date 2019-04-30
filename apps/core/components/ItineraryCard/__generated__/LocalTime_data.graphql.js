/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LocalTime_data$ref: FragmentReference;
declare export opaque type LocalTime_data$fragmentType: LocalTime_data$ref;
export type LocalTime_data = {|
  +time: ?{|
    +local: ?any
  |},
  +$refType: LocalTime_data$ref,
|};
export type LocalTime_data$data = LocalTime_data;
export type LocalTime_data$key = {
  +$data?: LocalTime_data$data,
  +$fragmentRefs: LocalTime_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "LocalTime_data",
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
(node/*: any*/).hash = '9ddc07f6289c29045a15e58fc36f6be3';
module.exports = node;
