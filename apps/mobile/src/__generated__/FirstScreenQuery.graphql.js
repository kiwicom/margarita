/**
 * @flow
 * @relayHash ac9b05b770a36ab515aee30a1e4979d0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FirstScreenQueryVariables = {||};
export type FirstScreenQueryResponse = {|
  +id: string,
  +hello: ?string,
|};
export type FirstScreenQuery = {|
  variables: FirstScreenQueryVariables,
  response: FirstScreenQueryResponse,
|};
*/


/*
query FirstScreenQuery {
  id
  hello
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "hello",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FirstScreenQuery",
  "id": null,
  "text": "query FirstScreenQuery {\n  id\n  hello\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FirstScreenQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "FirstScreenQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5dcd75f2503b74da62f77d1c5922585f';
module.exports = node;
