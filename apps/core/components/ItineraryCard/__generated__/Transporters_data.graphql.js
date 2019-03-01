/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Transporters_data$ref: FragmentReference;
export type Transporters_data = {|
  +segments: ?$ReadOnlyArray<?{|
    +transporter: ?{|
      +name: ?string
    |}
  |}>,
  +$refType: Transporters_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Transporters_data",
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
(node/*: any*/).hash = 'f003f05cd2e45842dffe914f8aba7860';
module.exports = node;
