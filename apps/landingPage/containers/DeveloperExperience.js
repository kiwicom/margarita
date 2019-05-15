// @flow

import React from 'react';
import styled from 'styled-components';

import Content from '../components/Content';
import Highlight from '../components/Highlight';
import AccentedText from '../components/AccentedText';
import { CardItems, CardItem, CardDescription } from '../components/Card';
import Title from '../components/Title';

export default function DeveloperInfo() {
  return (
    <Content id="developer-experience">
      <Title>Technology</Title>
      <CardItems>
        <CardItem>
          <ImageContainer>
            <Image
              src="/static/icon-multi-platform.jpg"
              srcSet={`/static/icon-multi-platform.jpg 1x,
                /static/icon-multi-platform@2x.jpg 2x, /static/icon-multi-platform@3x.jpg 3x`}
              alt="Multiplatform app"
            />
          </ImageContainer>
          <CardTitle>Real </CardTitle>
          <HighlightLeftOffset>multi-platform app </HighlightLeftOffset>
          <CardDescription>
            One codebase for iOS, Android and web. And with user experience like
            in native apps.
          </CardDescription>
        </CardItem>
        <CardItem>
          <ImageContainer>
            <Image
              src="/static/icon-modern-technologies.jpg"
              srcSet={`/static/icon-modern-technologies.jpg 1x,
                /static/icon-modern-technologies@2x.jpg 2x, /static/icon-modern-technologies@3x.jpg 3x`}
              alt="React logo"
            />
          </ImageContainer>
          <CardTitle>Developed with </CardTitle>
          <HighlightLeftOffset>modern technologies</HighlightLeftOffset>
          <CardDescription>
            React Native and GraphQL are battle-tested modern technologies for
            the best developer experience.
          </CardDescription>
        </CardItem>
        <CardItem>
          <ImageContainer>
            <Image
              src="/static/icon-open-source.jpg"
              srcSet={`/static/icon-open-source.jpg 1x,
                /static/icon-open-source@2x.jpg 2x, /static/icon-open-source@3x.jpg 3x`}
              alt="Open-source licence"
            />
          </ImageContainer>
          <CardTitle>API is free and </CardTitle>
          <HighlightLeftOffset block>app is open-sourced</HighlightLeftOffset>
          <CardDescription>
            There are no fees. Even our API is free and bought tickets have the
            same price like on Kiwi.com. You can fork Margarita and use it for
            whatever.
          </CardDescription>
        </CardItem>
      </CardItems>
    </Content>
  );
}
const CardTitle = styled(AccentedText)`
  margin-top: 20px;
`;
const Image = styled.img`
  width: 120px;
`;
const ImageContainer = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
`;
const HighlightLeftOffset = styled(Highlight)`
  position: relative;
  left: -5px;
`;
