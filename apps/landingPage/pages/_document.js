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
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1334937,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
            }}
          />

          <title>Margarita | Create your own Kiwi.com for free</title>
          <meta
            name="description"
            content="Use Margarita and create your own Kiwi.com for free. We prepared everything you will need — data, web and mobile apps. All is based on modern technologies and it's open source."
          />
          <meta
            name="keywords"
            content="kiwi.com, open source, react native, multiplatform app, graphql, react native web, travel app"
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
            content="https://margarita.kiwi.com/static/preview.jpg"
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
            content="https://margarita.kiwi.com/static/preview.jpg"
          />
          <meta name="twitter:label1" content="Multiplatform app" />
          <meta name="twitter:data1" content="Web, iOS, Android" />
          <meta name="twitter:label2" content="Technologies" />
          <meta
            name="twitter:data2"
            content="React Native, GraphQL, Tequila API"
          />
          <meta name="twitter:label3" content="Open source" />
          <meta name="twitter:data3" content="MIT license" />
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
