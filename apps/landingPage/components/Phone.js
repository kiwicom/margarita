// @flow

import React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +src: string,
  +srcSet: string,
|};
export default function Phone({ src, srcSet }: Props) {
  return (
    <Container>
      <PhoneImage src={src} srcSet={srcSet} alt="" />
      <PhoneSkeleton
        src="/static/iphone-skeleton.png"
        srcSet={`/static/iphone-skeleton.png 1x,
                /static/iphone-skeleton@2x.png 2x, /static/iphone-skeleton@3x.png 3x`}
        alt=""
      />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  right: 0;
  display: none;
  width: 248px;
  height: 500px;
  justify-content: center;
  align-items: center;
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    display: flex;
  }
`;
const PhoneSkeleton = styled.img`
  position: absolute;
  z-index: 100;
`;
const PhoneImage = styled.img`
  position: absolute;
  z-index: 100;
  width: 222px;
  height: 481px;
  border-radius: 6px;
`;
