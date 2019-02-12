/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Transporters$ref: FragmentReference;
export type Transporters = {|
  +segments: ?$ReadOnlyArray<?{|
    +transporter: ?{|
      +name: ?string
    |}
  |}>,
  +$refType: Transporters$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Transporters",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "segments",
      "storageKey": null,
      "args": null,
      "concreteType": "Segment",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "transporter",
          "storageKey": null,
          "args": null,
          "concreteType": "Transporter",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7354dcb7e3745e7da6e5fdc91b6ef58e';
module.exports = node;
