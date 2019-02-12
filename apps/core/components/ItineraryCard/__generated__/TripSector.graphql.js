/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type LocalTime$ref = any;
type LocationName$ref = any;
type Transporters$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripSector$ref: FragmentReference;
export type TripSector = {|
  +duration: ?number,
  +arrivalTime: ?{|
    +$fragmentRefs: LocalTime$ref
  |},
  +departureTime: ?{|
    +$fragmentRefs: LocalTime$ref
  |},
  +destination: ?{|
    +$fragmentRefs: LocationName$ref
  |},
  +origin: ?{|
    +$fragmentRefs: LocationName$ref
  |},
  +$fragmentRefs: Transporters$ref,
  +$refType: TripSector$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "LocalTime",
    "args": null
  }
],
v1 = [
  {
    "kind": "FragmentSpread",
    "name": "LocationName",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripSector",
  "type": "Sector",
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
      "name": "arrivalTime",
      "storageKey": null,
      "args": null,
      "concreteType": "DateType",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "departureTime",
      "storageKey": null,
      "args": null,
      "concreteType": "DateType",
      "plural": false,
      "selections": (v0/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "destination",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "origin",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "FragmentSpread",
      "name": "Transporters",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '77833f7e41242862f9c4ad923909f6bb';
module.exports = node;
