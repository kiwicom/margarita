/**
 * @flow
 * @relayHash b948a7812c12c2a293c0f230a859e685
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BookingDetailWrapper$ref = any;
export type BookingDetailQueryVariables = {|
  id: string
|};
export type BookingDetailQueryResponse = {|
  +bookingDetail: ?{|
    +$fragmentRefs: BookingDetailWrapper$ref
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
    __typename
    ...BookingDetailWrapper
    id
  }
}

fragment BookingDetailWrapper on BookingInterface {
  ...TripDetails
}

fragment TripDetails on BookingInterface {
  ...Header
  ...TripInfoOneWay
  ...TripInfoMulticity
  ...TripInfoReturn
  type
}

fragment Header on BookingInterface {
  bookingId: id(opaque: false)
  status
}

fragment TripInfoOneWay on BookingInterface {
  ... on BookingOneWay {
    trip {
      ...TripInfo
    }
  }
}

fragment TripInfoMulticity on BookingInterface {
  ... on BookingMulticity {
    trips {
      ...TripInfo
    }
  }
}

fragment TripInfoReturn on BookingInterface {
  ... on BookingReturn {
    ...FromTo
    inbound {
      ...TripDates
    }
    outbound {
      ...TripDates
    }
  }
}

fragment FromTo on FromToInterface {
  departure {
    ...CityName
  }
  arrival {
    ...CityName
  }
  ...FromToIcon
}

fragment TripDates on Trip {
  departure {
    ...TripDate
  }
  arrival {
    ...TripDate
  }
  duration
}

fragment TripDate on RouteStop {
  time {
    local
  }
}

fragment CityName on RouteStop {
  cityName
  airport {
    countryFlagURL
    id
  }
}

fragment FromToIcon on FromToInterface {
  type
}

fragment TripInfo on Trip {
  ...FromTo
  ...TripDates
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
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cityName",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "airport",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "countryFlagURL",
      "args": null,
      "storageKey": null
    },
    (v3/*: any*/)
  ]
},
v6 = {
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
v7 = [
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/)
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v9 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v7/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v7/*: any*/)
  },
  (v2/*: any*/),
  (v8/*: any*/)
],
v10 = [
  (v4/*: any*/),
  (v5/*: any*/)
],
v11 = [
  (v6/*: any*/)
],
v12 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v11/*: any*/)
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": (v11/*: any*/)
  },
  (v8/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BookingDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "BookingDetailWrapper",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BookingDetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
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
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": (v9/*: any*/)
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trips",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": true,
                "selections": (v9/*: any*/)
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "departure",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": (v10/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "arrival",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": (v10/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": (v12/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": (v12/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "BookingDetailQuery",
    "id": null,
    "text": "query BookingDetailQuery(\n  $id: ID!\n) {\n  bookingDetail(id: $id) {\n    __typename\n    ...BookingDetailWrapper\n    id\n  }\n}\n\nfragment BookingDetailWrapper on BookingInterface {\n  ...TripDetails\n}\n\nfragment TripDetails on BookingInterface {\n  ...Header\n  ...TripInfoOneWay\n  ...TripInfoMulticity\n  ...TripInfoReturn\n  type\n}\n\nfragment Header on BookingInterface {\n  bookingId: id(opaque: false)\n  status\n}\n\nfragment TripInfoOneWay on BookingInterface {\n  ... on BookingOneWay {\n    trip {\n      ...TripInfo\n    }\n  }\n}\n\nfragment TripInfoMulticity on BookingInterface {\n  ... on BookingMulticity {\n    trips {\n      ...TripInfo\n    }\n  }\n}\n\nfragment TripInfoReturn on BookingInterface {\n  ... on BookingReturn {\n    ...FromTo\n    inbound {\n      ...TripDates\n    }\n    outbound {\n      ...TripDates\n    }\n  }\n}\n\nfragment FromTo on FromToInterface {\n  departure {\n    ...CityName\n  }\n  arrival {\n    ...CityName\n  }\n  ...FromToIcon\n}\n\nfragment TripDates on Trip {\n  departure {\n    ...TripDate\n  }\n  arrival {\n    ...TripDate\n  }\n  duration\n}\n\nfragment TripDate on RouteStop {\n  time {\n    local\n  }\n}\n\nfragment CityName on RouteStop {\n  cityName\n  airport {\n    countryFlagURL\n    id\n  }\n}\n\nfragment FromToIcon on FromToInterface {\n  type\n}\n\nfragment TripInfo on Trip {\n  ...FromTo\n  ...TripDates\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2bab57d93afd1e0305918568883c4fc6';
module.exports = node;
