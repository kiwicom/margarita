import { createEnvironment } from '@mrtnzlml/relay';

import { inMemoryFetcher } from '../graphql/index';

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
