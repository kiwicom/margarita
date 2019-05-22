// @flow

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: Function) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: <>{sheet.getStyleElement()}</>,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="msapplication-TileImage"
            content="/images/icons/kiwicom/ms-icon-144x144.png"
          />
          <title>Margarita | Create your own Kiwi.com for free</title>
          <meta
            name="description"
            content="Use Margarita and create your own Kiwi.com for free. We prepared everything you will need — data, web and mobile apps. All is based on modern technologies and it's open source."
          />
          <meta
            name="keywords"
            content="kiwi.com, open source, react native, multiplatform app, graphql, react native web"
          />
          <meta name="robots" content="index,follow" />
          <meta property="og:url" content="https://margarita.kiwi.com" />
          <meta property="og:site_name" content="Margarita" itemProp="name" />
          <meta
            property="og:title"
            content="Margarita | Create your own Kiwi.com for free"
          />
          <meta
            property="og:description"
            content="Use Margarita and create your own Kiwi.com for free. We prepared everything you will need — data, web and mobile apps. All is based on modern technologies and it's open source."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://margarita.kiwi.com/static/logo_margarita.png"
            itemProp="image"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@codekiwicom" />
          <meta
            name="twitter:title"
            content="Margarita | Create your own Kiwi.com for free"
          />
          <meta
            name="twitter:description"
            content="Use Margarita and create your own Kiwi.com for free. We prepared everything you will need — data, web and mobile apps. All is based on modern technologies and it's open source."
          />
          <meta
            name="twitter:image"
            content="https://margarita.kiwi.com/static/logo_margarita.png"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://images.kiwi.com/fonts/circular-pro/style.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
