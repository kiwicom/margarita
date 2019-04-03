// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { omit } from 'ramda';

import { TouchableWithoutFeedback } from '../TouchableWithoutFeedback';

type Props2 = {
  children: React.Node,
  overlap?: number,
};

const ExtendedTouchable = (props: Props2) => {
  const { overlap, children } = props;
  const hitSlop = {
    top: overlap,
    left: overlap,
    bottom: overlap,
    right: overlap,
  };
  return (
    <TouchableWithoutFeedback hitSlop={hitSlop} {...omit(['overlap'], props)}>
      <View>{children}</View>
    </TouchableWithoutFeedback>
  );
};

ExtendedTouchable.defaultProps = {
  overlap: 10,
};

export default ExtendedTouchable;
