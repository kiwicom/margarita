// @flow

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';

import { type IllustrationProps } from './IllustrationTypes';
// $FlowFixMe - Cannot resolve module RelativeImageStub ( possible solution https://bit.ly/2BYfHRr )
import Boarding from './assets/mobile/Boarding.png';
// $FlowFixMe
import Error from './assets/mobile/Error.png';
// $FlowFixMe
import NoResults from './assets/mobile/NoResults.png';

const getIllustration = name => {
  switch (name) {
    case 'Boarding':
      return Boarding;
    case 'Error':
      return Error;
    case 'NoResults':
      return NoResults;
    default:
      return null;
  }
};

export default function Illustration({ name, style }: IllustrationProps) {
  const illustration = getIllustration(name);
  return (
    illustration && (
      <Image style={[styles.illustration, style]} source={illustration} />
    )
  );
}

const styles = StyleSheet.create({
  illustration: {
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
