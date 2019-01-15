// @flow

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';

// $FlowFixMe - Cannot resolve module RelativeImageStub ( possible solution https://bit.ly/2BYfHRr )
import ErrorSearchTravel from './assets/mobile/error-search-travel.png';

export default function SearchIllustration() {
  return <Image style={styles.illustration} source={ErrorSearchTravel} />;
}

const styles = StyleSheet.create({
  illustration: {
    alignSelf: 'center',
    marginBottom: 20,
  },
});
