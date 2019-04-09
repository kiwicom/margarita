/**
 * @flow
 * @relayHash d4e8c958d7201ac3ca613d3f52134f1a
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
export type ResultDetailInnerQueryVariables = {|
  input: ItineraryCheckInput
|};
export type ResultDetailInnerQueryResponse = {|
  +$fragmentRefs: ResultDetailInner_data$ref
|};
export type ResultDetailInnerQuery = {|
  variables: ResultDetailInnerQueryVariables,
  response: ResultDetailInnerQueryResponse,
|};
*/


/*
query ResultDetailInnerQuery(
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
    "name": "ResultDetailInnerQuery",
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
    "name": "ResultDetailInnerQuery",
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
    "name": "ResultDetailInnerQuery",
    "id": null,
    "text": "query ResultDetailInnerQuery(\n  $input: ItineraryCheckInput!\n) {\n  ...ResultDetailInner_data_2VV6jB\n}\n\nfragment ResultDetailInner_data_2VV6jB on RootQuery {\n  checkItinerary(input: $input) {\n    __typename\n    isChecked\n    isValid\n    ...ResultDetailContent_data\n    id\n  }\n}\n\nfragment ResultDetailContent_data on ItineraryInterface {\n  isChecked\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17c0a6a049e7cec19e2327c9f5d7ecdd';
module.exports = node;
