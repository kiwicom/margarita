import { createEnvironment } from '@mrtnzlml/relay';

import { inMemoryFetcher } from '../packages/graphql/index'; // TODO: We need to transpile the code for it to work on web before we can import it from @kiwicom/margarita-graphql

const createInMemoryFetcher = () => {
  return function (request, variables, uploadables) {
    if (uploadables) {
      throw new Error(
        'Uploadables are not supported in this in-memory Relay environment.',
      );
    }
    return inMemoryFetcher(request.text, variables);
  };
};

export default createEnvironment({
  fetcherFn: createInMemoryFetcher(),
});
