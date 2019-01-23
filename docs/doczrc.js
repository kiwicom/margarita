// @flow

import doczPluginNetlify from 'docz-plugin-netlify';

export default {
  src: '..',
  plugins: [doczPluginNetlify()],
  native: true,
  public: './public',
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: '/public/font.css',
        },
      ],
    },
  },
};
