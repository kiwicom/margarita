/**
 * @flow
 * @relayHash 870510d1b2cd2fa50a00b7306bc6fca3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookingList$ref = any;
export type BookingsQueryVariables = {||};
export type BookingsQueryResponse = {|
  +customerBookings: ?{|
    +$fragmentRefs: BookingList$ref
  |}
|};
export type BookingsQuery = {|
  variables: BookingsQueryVariables,
  response: BookingsQueryResponse,
|};
*/


/*
query BookingsQuery {
  customerBookings {
    ...BookingList
  }
}

fragment BookingList on CustomerBookingConnection {
  edges {
    node {
      id(opaque: false)
      ...Booking
    }
  }
}

fragment Booking on CustomerBooking {
  ...BookingBadges
  destinationImageUrl(dimensions: _1200x628)
}

fragment BookingBadges on CustomerBooking {
  id(opaque: false)
  status
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookingsQuery",
  "id": null,
  "text": "query BookingsQuery {\n  customerBookings {\n    ...BookingList\n  }\n}\n\nfragment BookingList on CustomerBookingConnection {\n  edges {\n    node {\n      id(opaque: false)\n      ...Booking\n    }\n  }\n}\n\nfragment Booking on CustomerBooking {\n  ...BookingBadges\n  destinationImageUrl(dimensions: _1200x628)\n}\n\nfragment BookingBadges on CustomerBooking {\n  id(opaque: false)\n  status\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookingsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customerBookings",
        "storageKey": null,
        "args": null,
        "concreteType": "CustomerBookingConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "BookingList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookingsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customerBookings",
        "storageKey": null,
        "args": null,
        "concreteType": "CustomerBookingConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CustomerBookingEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "CustomerBooking",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
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
                    "name": "destinationImageUrl",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "dimensions",
                        "value": "_1200x628",
                        "type": "BookingDestinationImageDimensions"
                      }
                    ],
                    "storageKey": "destinationImageUrl(dimensions:\"_1200x628\")"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = 'a01be717e5420f7b78b6f5bc5aa5944b';
module.exports = node;
