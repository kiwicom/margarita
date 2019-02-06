/**
 * @flow
 * @relayHash 446645314418775a3b16a19d747634c1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TripDetails$ref = any;
export type BookingDetailQueryVariables = {|
  id: string
|};
export type BookingDetailQueryResponse = {|
  +bookingDetail: ?{|
    +$fragmentRefs: TripDetails$ref
  |}
|};
export type BookingDetailQuery = {|
  variables: BookingDetailQueryVariables,
  response: BookingDetailQueryResponse,
|};
*/


/*
query BookingDetailQuery(
  $id: ID!
) {
  bookingDetail(id: $id) {
    ...TripDetails
    id
  }
}

fragment TripDetails on CustomerBooking {
  ...Header
}

fragment Header on CustomerBooking {
  bookingId: id(opaque: false)
  status
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookingDetailQuery",
  "id": null,
  "text": "query BookingDetailQuery(\n  $id: ID!\n) {\n  bookingDetail(id: $id) {\n    ...TripDetails\n    id\n  }\n}\n\nfragment TripDetails on CustomerBooking {\n  ...Header\n}\n\nfragment Header on CustomerBooking {\n  bookingId: id(opaque: false)\n  status\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookingDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingDetail",
        "storageKey": null,
        "args": v1,
        "concreteType": "CustomerBooking",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TripDetails",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookingDetailQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingDetail",
        "storageKey": null,
        "args": v1,
        "concreteType": "CustomerBooking",
        "plural": false,
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '04876d7c90f6b4ab217281deedf4f1a9';
module.exports = node;
