// @flow

import React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

type Props = {|
  +iframeWidth: number,
  +iframeHeight: number,
|};

export default ({ iframeWidth, iframeHeight }: Props) => (
  <Playground id="playground">
    <HeadingContainer>
      <Heading type="title1">Try it out!</Heading>
      <Heading type="title2">It has its own GraphQL server</Heading>
    </HeadingContainer>
    <WrapperIframe>
      <iframe
        title="GraphQL playground"
        width={iframeWidth}
        height={iframeHeight}
        src="https://p2kwd3i3a8.execute-api.eu-central-1.amazonaws.com/staging/graphql"
      />
    </WrapperIframe>
  </Playground>
);

const Playground = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
`;

const WrapperIframe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  background-image: linear-gradient(#e9eef1, 5%, ${defaultTokens.paletteWhite});
`;
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-bottom: 50px;
`;
