// @flow

import Document, { Head, Main, NextScript } from 'next/document';
import * as React from 'react';
import { AppRegistry } from 'react-native-web';
import { Fonts } from '@kiwicom/universal-components';

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

// This is a workaround for the following bug:
// https://github.com/zeit/next.js/issues/3520
const globalStyle = {
  __html: `
  @font-face {
    font-family: 'orbit-icons';
    src: url(${Fonts.OrbitIcons});
  }

  body {
    -webkit-font-smoothing: antialiased;
    height: 100%;
    overflow: hidden;
  }
`,
};

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
          <link rel="icon" type="image/x-icon" href="/static/img/favicon.ico" />
          <style dangerouslySetInnerHTML={globalStyle} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
