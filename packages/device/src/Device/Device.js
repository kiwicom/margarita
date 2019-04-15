// @flow

import { Dimensions } from 'react-native';

function isTablet(): boolean {
  const { width, height } = Dimensions.get('window');
  return height / width < 1.6;
}

const Device = {
  isTablet,
};

export default Device;
