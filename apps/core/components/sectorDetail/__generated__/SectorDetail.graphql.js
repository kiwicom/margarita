/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SectorHeader$ref = any;
type SectorStopoverDuration$ref = any;
type Segment$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SectorDetail$ref: FragmentReference;
export type SectorDetail = {|
  +segments: ?$ReadOnlyArray<?{|
    +id: string,
    +departure: ?{|
      +time: ?{|
        +local: ?any
      |}
    |},
    +arrival: ?{|
      +time: ?{|
        +local: ?any
      |}
    |},
    +$fragmentRefs: Segment$ref,
  |}>,
  +$fragmentRefs: SectorStopoverDuration$ref & SectorHeader$ref,
  +$refType: SectorDetail$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
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
];
return {
  "kind": "Fragment",
  "name": "SectorDetail",
  "type": "Sector",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "SectorStopoverDuration",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SectorHeader",
      "args": null
    },
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
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "departure",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": (v0/*: any*/)
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "arrival",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": (v0/*: any*/)
        },
        {
          "kind": "FragmentSpread",
          "name": "Segment",
          "args": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd1126f53d690aad4051445cf8ae0b43f';
module.exports = node;
