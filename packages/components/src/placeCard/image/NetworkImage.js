// @flow

import * as React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';

import type { Props } from './ImageTypes';
import MissingImage from './MissingImage';

export default function NetworkImage(imageProps: Props) {
  if (!imageProps.source.uri) {
    return <MissingImage {...imageProps} resizeMode="stretch" />;
  }

  const newProps = {
    ...imageProps,
    style: [styles.imageStyle, imageProps.style],
  };

  return <Image {...newProps} />;
}

const styles = StyleSheet.create({
  imageStyle: {
    overflow: 'hidden', // otherwise 'borderRadius' won't work
  },
});
