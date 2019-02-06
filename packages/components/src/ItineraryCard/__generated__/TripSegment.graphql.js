/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripSegment$ref: FragmentReference;
export type TripSegment = {|
  +duration: ?number,
  +segments: ?$ReadOnlyArray<?{|
    +arrivalTime: ?{|
      +local: ?any
    |},
    +departureTime: ?{|
      +local: ?any
    |},
    +destination: ?{|
      +name: ?string
    |},
    +duration: ?number,
    +origin: ?{|
      +name: ?string
    |},
    +transporter: ?{|
      +name: ?string
    |},
  |}>,
  +$refType: TripSegment$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "local",
    "args": null,
    "storageKey": null
  }
],
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripSegment",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
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
          "name": "arrivalTime",
          "storageKey": null,
          "args": null,
          "concreteType": "DateType",
          "plural": false,
          "selections": v1
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "departureTime",
          "storageKey": null,
          "args": null,
          "concreteType": "DateType",
          "plural": false,
          "selections": v1
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "destination",
          "storageKey": null,
          "args": null,
          "concreteType": "Location",
          "plural": false,
          "selections": v2
        },
        v0,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "origin",
          "storageKey": null,
          "args": null,
          "concreteType": "Location",
          "plural": false,
          "selections": v2
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "transporter",
          "storageKey": null,
          "args": null,
          "concreteType": "Transporter",
          "plural": false,
          "selections": v2
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '5bf0e8799d49c64ede333aabcc6e9c20';
module.exports = node;
