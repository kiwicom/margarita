// @flow

import * as React from 'react';
import { View } from 'react-native';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
`;

const Wrapper = styled(View)`
  position: relative;
  display: inline-block;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.1) 30%,
      rgba(0, 0, 0, 0) 0%
    );
    background-repeat: no-repeat;
    background-size: 800px;

    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: ${animation};
    animation-timing-function: linear;
  }
`;

const ShimmeringLoader = (props: any) => <Wrapper {...props} />;

export default ShimmeringLoader;
