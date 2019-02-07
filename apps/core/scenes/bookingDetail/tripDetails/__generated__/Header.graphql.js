/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Header$ref: FragmentReference;
export type Header = {|
  +bookingId: string,
  +status: ?string,
  +$refType: Header$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Header",
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
          "value": false,
          "type": "Boolean"
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
(node/*: any*/).hash = '82d8a040dee62bf1ba28c6391864a6d2';
module.exports = node;
