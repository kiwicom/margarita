/**
 * @flow
 * @relayHash e569b9b7a8c965af4f1d59a92ee8aa7b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ResultDetailInner_data$ref = any;
export type ItineraryCheckInput = {|
  bookingToken: string,
  bags: number,
  passengers: PassengersInput,
|};
export type PassengersInput = {|
  adults?: ?number,
  children?: ?number,
  infants?: ?number,
|};
export type ResultDetailQueryVariables = {|
  input: ItineraryCheckInput
|};
export type ResultDetailQueryResponse = {|
  +$fragmentRefs: ResultDetailInner_data$ref
|};
export type ResultDetailQuery = {|
  variables: ResultDetailQueryVariables,
  response: ResultDetailQueryResponse,
|};
*/


/*
query ResultDetailQuery(
  $input: ItineraryCheckInput!
) {
  ...ResultDetailInner_data_2VV6jB
}

fragment ResultDetailInner_data_2VV6jB on RootQuery {
  checkItinerary(input: $input) {
    __typename
    isChecked
    isValid
    ...ResultDetailContent_data
    id
  }
}

fragment ResultDetailContent_data on ItineraryInterface {
  isChecked
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ItineraryCheckInput!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ResultDetailQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "ResultDetailInner_data",
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ResultDetailQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "checkItinerary",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "ItineraryCheckInput!"
          }
        ],
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
            "alias": null,
            "name": "isChecked",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isValid",
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
  },
  "params": {
    "operationKind": "query",
    "name": "ResultDetailQuery",
    "id": null,
    "text": "query ResultDetailQuery(\n  $input: ItineraryCheckInput!\n) {\n  ...ResultDetailInner_data_2VV6jB\n}\n\nfragment ResultDetailInner_data_2VV6jB on RootQuery {\n  checkItinerary(input: $input) {\n    __typename\n    isChecked\n    isValid\n    ...ResultDetailContent_data\n    id\n  }\n}\n\nfragment ResultDetailContent_data on ItineraryInterface {\n  isChecked\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2a71068d1823e2eb2435562d2adcc8ba';
module.exports = node;
