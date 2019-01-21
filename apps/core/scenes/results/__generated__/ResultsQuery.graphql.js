/**
 * @flow
 * @relayHash 3c6faf68dd7646e3382ba3bcfe569e16
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ResultsList$ref = any;
export type ItinerariesSearchInput = {
  travelFrom: string,
  travelTo?: ?string,
  dateFrom: any,
  dateTo?: ?any,
  returnDateFrom?: ?any,
  returnDateTo?: ?any,
  passengers?: ?PassengersInput,
};
export type PassengersInput = {
  adults?: ?number,
  children?: ?number,
  infants?: ?number,
};
export type ResultsQueryVariables = {|
  input: ItinerariesSearchInput
|};
export type ResultsQueryResponse = {|
  +searchItineraries: ?{|
    +$fragmentRefs: ResultsList$ref
  |}
|};
export type ResultsQuery = {|
  variables: ResultsQueryVariables,
  response: ResultsQueryResponse,
|};
*/


/*
query ResultsQuery(
  $input: ItinerariesSearchInput!
) {
  searchItineraries(input: $input) {
    ...ResultsList
  }
}

fragment ResultsList on ItineraryConnection {
  edges {
    node {
      id
      ...ResultsListItem
    }
  }
}

fragment ResultsListItem on Itinerary {
  price {
    currency
    amount
  }
  route {
    airline
    arrival {
      city
      cityCode
      localTime
      utcTime
    }
    departure {
      city
      cityCode
      localTime
      utcTime
    }
    id
  }
  routes
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ItinerariesSearchInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "ItinerariesSearchInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "city",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "cityCode",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "localTime",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "utcTime",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ResultsQuery",
  "id": null,
  "text": "query ResultsQuery(\n  $input: ItinerariesSearchInput!\n) {\n  searchItineraries(input: $input) {\n    ...ResultsList\n  }\n}\n\nfragment ResultsList on ItineraryConnection {\n  edges {\n    node {\n      id\n      ...ResultsListItem\n    }\n  }\n}\n\nfragment ResultsListItem on Itinerary {\n  price {\n    currency\n    amount\n  }\n  route {\n    airline\n    arrival {\n      city\n      cityCode\n      localTime\n      utcTime\n    }\n    departure {\n      city\n      cityCode\n      localTime\n      utcTime\n    }\n    id\n  }\n  routes\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ResultsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchItineraries",
        "storageKey": null,
        "args": v1,
        "concreteType": "ItineraryConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ResultsList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ResultsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchItineraries",
        "storageKey": null,
        "args": v1,
        "concreteType": "ItineraryConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "ItineraryEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Itinerary",
                "plural": false,
                "selections": [
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PriceType",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "currency",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "amount",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "route",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Route",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "airline",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "arrival",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TripSegment",
                        "plural": false,
                        "selections": v3
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "departure",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TripSegment",
                        "plural": false,
                        "selections": v3
                      },
                      v2
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "routes",
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
(node/*: any*/).hash = '9c7f8976ed7af754f40bc050b2ebf86d';
module.exports = node;
