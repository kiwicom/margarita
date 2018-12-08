// @flow

import { server } from './index';

server.listen().then(({ url, context }) => {
  console.log(`🚀 Server ready at ${url}`); // eslint-disable-line no-console
});
