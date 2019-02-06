/**
 * @flow
 * @relayHash 7c57eb0b891179451125ff04ebc3d54a
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
  sectors {
    duration
    destination {
      name
      id
    }
    origin {
      name
      id
    }
    segments {
      id
      arrivalTime {
        local
        utc
      }
      departureTime {
        local
        utc
      }
      destination {
        name
        id
      }
      duration
      origin {
        name
        id
      }
      transporter {
        name
      }
    }
  }
  price {
    currency
    amount
  }
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
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = [
  v4,
  v2
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "destination",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": v5
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "origin",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": v5
},
v8 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "local",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "utc",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ResultsQuery",
  "id": null,
  "text": "query ResultsQuery(\n  $input: ItinerariesSearchInput!\n) {\n  searchItineraries(input: $input) {\n    ...ResultsList\n  }\n}\n\nfragment ResultsList on ItineraryConnection {\n  edges {\n    node {\n      id\n      ...ResultsListItem\n    }\n  }\n}\n\nfragment ResultsListItem on Itinerary {\n  sectors {\n    duration\n    destination {\n      name\n      id\n    }\n    origin {\n      name\n      id\n    }\n    segments {\n      id\n      arrivalTime {\n        local\n        utc\n      }\n      departureTime {\n        local\n        utc\n      }\n      destination {\n        name\n        id\n      }\n      duration\n      origin {\n        name\n        id\n      }\n      transporter {\n        name\n      }\n    }\n  }\n  price {\n    currency\n    amount\n  }\n}\n",
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
                    "name": "sectors",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sector",
                    "plural": true,
                    "selections": [
                      v3,
                      v6,
                      v7,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "segments",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Segment",
                        "plural": true,
                        "selections": [
                          v2,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "arrivalTime",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "DateType",
                            "plural": false,
                            "selections": v8
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "departureTime",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "DateType",
                            "plural": false,
                            "selections": v8
                          },
                          v6,
                          v3,
                          v7,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "transporter",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Transporter",
                            "plural": false,
                            "selections": [
                              v4
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Price",
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
