// @flow

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    @import url('https://images.kiwi.com/fonts/circular-pro/style.css');
    font-family: 'Circular Pro', sans-serif;
  }
`;

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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/static/logo_margarita.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GlobalStyle />
        </body>
      </html>
    );
  }
}
