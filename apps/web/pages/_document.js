// @flow

import Document, { Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import { AppRegistry } from 'react-native-web';

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: (cb: Function) => void) {
    AppRegistry.registerComponent('Main', () => Main);
    // $FlowFixMe Wrong libdef. https://gist.github.com/paularmstrong/f60b40d16fc83e1e8e532d483336f9bb
    const { getStyleElement } = AppRegistry.getApplication('Main');
    const page = renderPage();

    const styles = [
      // eslint-disable-next-line react/jsx-key
      <style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />,
      getStyleElement(),
    ];
    return { ...page, styles: React.Children.toArray(styles) };
  }

  render() {
    return (
      <html style={{ height: '100%' }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
            rel="stylesheet"
          />
        </Head>
        <body style={{ height: '100%', overflow: 'hidden' }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
