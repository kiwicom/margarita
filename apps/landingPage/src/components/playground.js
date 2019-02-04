// @flow

import React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

type Props = {|
  +iframeWidth: number,
  +iframeHeight: number,
|};

export default ({ iframeWidth, iframeHeight }: Props) => (
  <Playground>
    <HeadingContainer>
      <Heading type="title2">It has its own GraphQL server</Heading>
    </HeadingContainer>
    <iframe
      title="GraphQL playground"
      width={iframeWidth}
      height={iframeHeight}
      src="https://p2kwd3i3a8.execute-api.eu-central-1.amazonaws.com/staging/graphql"
    />
  </Playground>
);

const Playground = styled.div`
  background-image: linear-gradient(#e9eef1, 5%, white);
  margin-top: 6vh;
  display: flex;
  padding-top: 6vh;
  align-items: center;
  flex-direction: column;
`;

const HeadingContainer = styled.div`
  padding-bottom: 3vh;
  padding-right: 900px;
`;
