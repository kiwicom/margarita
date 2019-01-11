// @flow

import React from 'react';
import { Image } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';

// $FlowFixMe - Cannot resolve module RelativeImageStub ( possible solution https://bit.ly/2BYfHRr )
import SearchTravel from './assets/mobile/search-travel.png';

export default function SearchIllustration() {
  return <Image style={styles.illustration} source={SearchTravel} />;
}

const styles = StyleSheet.create({
  illustration: {
    alignSelf: 'center',
    marginBottom: 20,
  },
});
