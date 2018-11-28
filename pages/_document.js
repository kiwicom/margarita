// @flow

import Document, {Head, Main, NextScript} from 'next/document';
import * as React from 'react';
import {AppRegistry} from 'react-native-web';

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps({renderPage}: (cb: Function) => void) {
    AppRegistry.registerComponent('Main', () => Main);
    const {getStyleElement} = AppRegistry.getApplication('Main');
    const page = renderPage();

    const styles = [
      // eslint-disable-next-line react/jsx-key
      <style dangerouslySetInnerHTML={{__html: normalizeNextElements}} />,
      getStyleElement(),
    ];
    return {...page, styles: React.Children.toArray(styles)};
  }

  render() {
    return (
      <html style={{height: '100%'}}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body style={{height: '100%', overflow: 'hidden'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
