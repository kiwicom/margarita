/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Carriers_data$ref: FragmentReference;
declare export opaque type Carriers_data$fragmentType: Carriers_data$ref;
export type Carriers_data = {|
  +segments: ?$ReadOnlyArray<?{|
    +carrier: ?{|
      +name: ?string,
      +code: ?string,
    |}
  |}>,
  +$refType: Carriers_data$ref,
|};
export type Carriers_data$data = Carriers_data;
export type Carriers_data$key = {
  +$data?: Carriers_data$data,
  +$fragmentRefs: Carriers_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Carriers_data",
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
          "name": "carrier",
          "storageKey": null,
          "args": null,
          "concreteType": "Carrier",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "code",
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
(node/*: any*/).hash = '7c95ca6a8afd45dbe41ca05525788e99';
module.exports = node;
