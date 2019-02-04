/**
 * @flow
 * @relayHash 91064ec11982e43712f61fc61c012759
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
  destinationImageUrl(dimensions: _1200x628)
  relayId: id
  ...BookingBadges
  ...FromTo
  ...DateAndPassengerCount
}

fragment BookingBadges on CustomerBooking {
  id(opaque: false)
  status
}

fragment FromTo on CustomerBooking {
  departure {
    ...CityName
  }
  arrival {
    ...CityName
  }
}

fragment DateAndPassengerCount on CustomerBooking {
  passengerCount
  departure {
    time {
      local
    }
  }
}

fragment CityName on RouteStop {
  cityName
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cityName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BookingsQuery",
  "id": null,
  "text": "query BookingsQuery {\n  customerBookings {\n    ...BookingList\n  }\n}\n\nfragment BookingList on CustomerBookingConnection {\n  edges {\n    node {\n      id(opaque: false)\n      ...Booking\n    }\n  }\n}\n\nfragment Booking on CustomerBooking {\n  destinationImageUrl(dimensions: _1200x628)\n  relayId: id\n  ...BookingBadges\n  ...FromTo\n  ...DateAndPassengerCount\n}\n\nfragment BookingBadges on CustomerBooking {\n  id(opaque: false)\n  status\n}\n\nfragment FromTo on CustomerBooking {\n  departure {\n    ...CityName\n  }\n  arrival {\n    ...CityName\n  }\n}\n\nfragment DateAndPassengerCount on CustomerBooking {\n  passengerCount\n  departure {\n    time {\n      local\n    }\n  }\n}\n\nfragment CityName on RouteStop {\n  cityName\n}\n",
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": "relayId",
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
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
                    "selections": [
                      v0,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "time",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SegmentTime",
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
                    ]
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
                      v0
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "passengerCount",
                    "args": null,
                    "storageKey": null
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
})();
// prettier-ignore
(node/*: any*/).hash = 'a01be717e5420f7b78b6f5bc5aa5944b';
module.exports = node;
