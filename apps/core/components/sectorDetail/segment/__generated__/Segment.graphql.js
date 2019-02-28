/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SegmentStopInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Segment$ref: FragmentReference;
export type Segment = {|
  +duration: ?number,
  +arrival: ?{|
    +$fragmentRefs: SegmentStopInfo$ref
  |},
  +departure: ?{|
    +time: ?{|
      +local: ?any
    |},
    +$fragmentRefs: SegmentStopInfo$ref,
  |},
  +transporter: ?{|
    +name: ?string
  |},
  +$refType: Segment$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "FragmentSpread",
  "name": "SegmentStopInfo",
  "args": null
};
return {
  "kind": "Fragment",
  "name": "Segment",
  "type": "Segment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "duration",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "arrival",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departure",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
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
        },
        (v0/*: any*/)
      ]
    },
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'de04a1b6ac0e3433dbbceb8061eb3638';
module.exports = node;
