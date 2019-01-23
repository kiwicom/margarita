// @flow

export default {
  src: '..',
  dest: '../.docz/dist',
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
