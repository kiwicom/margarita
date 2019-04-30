/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type VisaInfoSummary_data$ref: FragmentReference;
declare export opaque type VisaInfoSummary_data$fragmentType: VisaInfoSummary_data$ref;
export type VisaInfoSummary_data = {|
  +passengers: ?$ReadOnlyArray<?{|
    +visaRequired: ?boolean
  |}>,
  +$refType: VisaInfoSummary_data$ref,
|};
export type VisaInfoSummary_data$data = VisaInfoSummary_data;
export type VisaInfoSummary_data$key = {
  +$data?: VisaInfoSummary_data$data,
  +$fragmentRefs: VisaInfoSummary_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "VisaInfoSummary_data",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "passengers",
      "storageKey": null,
      "args": null,
      "concreteType": "Passenger",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "visaRequired",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a6ab9975c1091f6ddb00daf9ad95348c';
module.exports = node;
