/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Header_data$ref: FragmentReference;
declare export opaque type Header_data$fragmentType: Header_data$ref;
export type Header_data = {|
  +bookingId: string,
  +status: ?string,
  +$refType: Header_data$ref,
|};
export type Header_data$data = Header_data;
export type Header_data$key = {
  +$data?: Header_data$data,
  +$fragmentRefs: Header_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Header_data",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "bookingId",
      "name": "id",
      "args": [
        {
          "kind": "Literal",
          "name": "opaque",
          "value": false
        }
      ],
      "storageKey": "id(opaque:false)"
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2bdbbb0854d7f418cdb544eaa62ec30c';
module.exports = node;
